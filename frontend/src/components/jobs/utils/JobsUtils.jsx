'use client';

export const handleSearch = (event, jobs, searchTerm, setFilteredJobs, setCurrentPage) => {
  event.preventDefault();
  const filtered = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.industry.some(ind => ind.toLowerCase().includes(searchTerm.toLowerCase())) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  setFilteredJobs(filtered);
  setCurrentPage(1);
};

export const handleFilterChange = (event, setFilters) => {
  const { name, value } = event.target;
  setFilters(prevFilters => ({
    ...prevFilters,
    [name]: value
  }));
};

export const handleIndustryFilter = (industry, setFilters, filterType = 'industry') => {
  setFilters(prevFilters => ({
    ...prevFilters,
    [filterType]: prevFilters[filterType].includes(industry)
      ? prevFilters[filterType].filter(item => item !== industry)
      : [...prevFilters[filterType], industry]
  }));
};

export const applyFilters = (jobs, filters, setFilteredJobs, setCurrentPage) => {
  let filtered = jobs;

  if (filters.jobType) {
    filtered = filtered.filter(job => job.type === filters.jobType);
  }

  if (filters.location.country || filters.location.state || filters.location.city) {
    filtered = filtered.filter(job => 
      (!filters.location.country || job.location.country === filters.location.country) &&
      (!filters.location.state || job.location.state === filters.location.state) &&
      (!filters.location.city || job.location.city === filters.location.city)
    );
  }

  if (filters.salaryMin || filters.salaryMax) {
    filtered = filtered.filter(job => {
      const jobSalary = parseInt(job.salary.replace(/[^0-9]/g, ''));
      return (!filters.salaryMin || jobSalary >= filters.salaryMin) &&
             (!filters.salaryMax || jobSalary <= filters.salaryMax);
    });
  }

  if (filters.experience.length > 0) {
    filtered = filtered.filter(job => filters.experience.includes(job.experience));
  }

  if (filters.industry.length > 0) {
    filtered = filtered.filter(job => 
      filters.industry.some(ind => job.industry.includes(ind))
    );
  }

  if (filters.benefits.length > 0) {
    filtered = filtered.filter(job =>
      filters.benefits.every(benefit => job.benefits.includes(benefit))
    );
  }

  if (filters.workModel.length > 0) {
    filtered = filtered.filter(job => filters.workModel.includes(job.workModel));
  }

  if (filters.contractType.length > 0) {
    filtered = filtered.filter(job => filters.contractType.includes(job.contractType));
  }

  setFilteredJobs(filtered);
  setCurrentPage(1);
};

export const handleJobClick = (job, setSelectedJob, setShowModal, setSkillMatchPercentage) => {
  setSelectedJob(job);
  setShowModal(true);
  const matchScore = calculateSkillMatch(job.skills, initialStates.userProfile.skills);
  setSkillMatchPercentage(matchScore);
};

export const calculateSkillMatch = (jobSkills, userSkills) => {
  const matchingSkills = jobSkills.filter(skill => 
    userSkills.some(userSkill => 
      userSkill.toLowerCase() === skill.toLowerCase()
    )
  );
  return Math.round((matchingSkills.length / jobSkills.length) * 100);
};

export const handleApplyJob = (jobId, setAppliedJobs, setShowModal) => {
  setAppliedJobs(prevAppliedJobs => [...prevAppliedJobs, jobId]);
  setShowModal(false);
};

export const handleSaveJob = (jobId, setSavedJobs) => {
  setSavedJobs(prevSavedJobs => [...prevSavedJobs, jobId]);
};

export const handleShareJob = (job) => {
  if (navigator.share) {
    navigator.share({
      title: `Vaga: ${job.title} na ${job.company}`,
      text: `Confira esta vaga de ${job.title} na ${job.company}!`,
      url: window.location.href,
    })
    .then(() => console.log('Vaga compartilhada com sucesso'))
    .catch((error) => console.log('Erro ao compartilhar', error));
  } else {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, '_blank');
  }
};

export const handleNewJobChange = (event, setNewJob) => {
  const { name, value } = event.target;
  setNewJob(prevJob => ({
    ...prevJob,
    [name]: value
  }));
};

export const handleLocationChange = (event, setNewJob) => {
  const { name, value } = event.target;
  setNewJob(prevJob => ({
    ...prevJob,
    location: {
      ...prevJob.location,
      [name]: value
    }
  }));
};

export const handlePostJob = (event, newJob, jobs, setJobs, setFilteredJobs, setShowPostJobModal, setNewJob) => {
  event.preventDefault();
  const newJobWithId = {
    ...newJob,
    id: Date.now(),
    postDate: new Date().toISOString(),
    statistics: {
      views: 0,
      applications: 0,
      daysAgo: 0
    }
  };
  
  setJobs(prevJobs => [...prevJobs, newJobWithId]);
  setFilteredJobs(prevFiltered => [...prevFiltered, newJobWithId]);
  setShowPostJobModal(false);
  setNewJob(initialJobState);
};

export const defaultChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Activity',
    data: [0, 0, 0, 0, 0, 0],
    borderColor: '#4a00e0',
    fill: false
  }]
};

export const initialStates = {
  filters: {
    jobType: '',
    location: {
      country: '',
      state: '',
      city: ''
    },
    salaryMin: '',
    salaryMax: '',
    experience: [],
    industry: [],
    benefits: [],
    workModel: [],
    contractType: [],
    acceptRemote: false
  },
  activityData: defaultChartData,
  careerInsights: {
    salaryTrends: defaultChartData,
    marketDemand: {
      labels: ['Frontend', 'Backend', 'Full Stack', 'DevOps'],
      datasets: [{
        label: 'Demand',
        data: [0, 0, 0, 0],
        backgroundColor: '#8e2de2'
      }]
    },
    topSkills: [
      { name: 'React', demand: 85 },
      { name: 'Node.js', demand: 80 },
      { name: 'Python', demand: 75 }
    ],
    certifications: [
      { name: 'AWS Certified', salaryIncrease: 25 },
      { name: 'Google Cloud', salaryIncrease: 20 }
    ],
    topCompanies: [
      { name: 'Google', openings: 50 },
      { name: 'Microsoft', openings: 45 }
    ],
    geographicDistribution: [
      { name: 'São Paulo', percentage: 40 },
      { name: 'Rio de Janeiro', percentage: 25 }
    ]
  },
  userProfile: {
    name: 'João Silva',
    title: 'Desenvolvedor Full Stack',
    avatar: 'https://via.placeholder.com/100',
    location: 'São Paulo, SP',
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    profileCompletion: 85,
    networkStats: {
      connections: 500,
      views: 50,
      introductions: 10
    },
    learningStats: {
      studyHours: 20,
      certificates: 5,
      mentoringSessions: 3
    },
    achievements: [
      {
        title: 'Networking Master',
        description: '100+ conexões estabelecidas',
        icon: 'trophy'
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Developer',
        institution: 'Amazon Web Services',
        year: 2023
      }
    ],
    recommendations: [
      {
        text: 'Excelente profissional, muito dedicado e competente',
        author: 'Maria Santos',
        role: 'Tech Lead'
      }
    ],
    recommendedGroups: [
      {
        name: 'React Developers',
        members: 5000,
        description: 'Grupo para desenvolvedores React'
      }
    ],
    networkingOpportunities: [
      {
        title: 'Tech Meetup',
        description: 'Encontro mensal de desenvolvedores',
        type: 'Presencial'
      }
    ],
    recentChats: [
      {
        name: 'Ana Silva',
        avatar: 'https://via.placeholder.com/50',
        lastMessage: 'Ótimo trabalho no último projeto!',
        timestamp: '2h atrás'
      }
    ]
  }
};

export const mockJobs = [
  {
    id: 1,
    title: 'Desenvolvedor Full Stack Senior',
    company: 'TechCorp',
    companyLogo: 'https://via.placeholder.com/100',
    location: {
      country: 'Brasil',
      state: 'São Paulo',
      city: 'São Paulo'
    },
    salary: 'R$ 15.000 - R$ 18.000',
    type: 'CLT',
    workModel: 'Híbrido',
    experience: 'Sênior',
    description: 'Procuramos um desenvolvedor full stack senior para liderar projetos...',
    responsibilities: [
      'Liderar equipe de desenvolvimento',
      'Arquitetar soluções',
      'Code review'
    ],
    requirements: [
      'React', 'Node.js', 'AWS',
      '5+ anos de experiência'
    ],
    benefits: [
      'Plano de saúde',
      'Vale refeição',
      'Gympass',
      'PLR'
    ],
    skills: ['React', 'Node.js', 'AWS', 'MongoDB'],
    industry: ['Tecnologia'],
    statistics: {
      views: 1500,
      applications: 200,
      daysAgo: 3
    },
    companyInsights: {
      growth: 40,
      employees: '1000+',
      rating: 4.5
    }
  }
];

export const initialJobState = {
  title: '',
  company: '',
  location: {
    country: '',
    state: '',
    city: ''
  },
  salary: '',
  type: '',
  workModel: '',
  experience: '',
  description: '',
  responsibilities: [],
  requirements: [],
  benefits: [],
  skills: [],
  industry: []
};
