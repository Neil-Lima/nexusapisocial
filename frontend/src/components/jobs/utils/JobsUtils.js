import { useState, useEffect } from 'react';

export const mockJobs = [
  {
    id: 1,
    title: 'Desenvolvedor Frontend Senior',
    company: 'TechCorp',
    companyLogo: '/images/companies/techcorp.png',
    location: 'São Paulo, SP',
    type: 'Full-time',
    salary: 'R$ 8.000 - 12.000',
    status: 'Ativa',
    description: 'Procuramos desenvolvedor frontend com experiência em React, Next.js e TypeScript para liderar projetos inovadores.',
    skills: ['React', 'TypeScript', 'Next.js', 'Styled Components'],
    postedAt: '2024-01-15',
    applicants: 45,
    views: 230,
    matches: 15
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'DesignStudio',
    companyLogo: '/images/companies/designstudio.png',
    location: 'Rio de Janeiro, RJ',
    type: 'Híbrido',
    salary: 'R$ 6.000 - 9.000',
    status: 'Ativa',
    description: 'Buscamos designer com experiência em interfaces mobile e web, com conhecimento em Design Systems.',
    skills: ['Figma', 'Adobe XD', 'Design Systems', 'Prototyping'],
    postedAt: '2024-01-16',
    applicants: 32,
    views: 180,
    matches: 12
  },
  {
    id: 3,
    title: 'Desenvolvedor Backend',
    company: 'DataTech',
    companyLogo: '/images/companies/datatech.png',
    location: 'Curitiba, PR',
    type: 'Remoto',
    salary: 'R$ 7.000 - 10.000',
    status: 'Ativa',
    description: 'Desenvolvedor backend para trabalhar com microsserviços e APIs RESTful.',
    skills: ['Node.js', 'Python', 'MongoDB', 'Docker'],
    postedAt: '2024-01-17',
    applicants: 28,
    views: 150,
    matches: 8
  }
];

export const mockApplications = [
  {
    id: 1,
    jobTitle: 'Desenvolvedor Frontend Senior',
    company: 'TechCorp',
    companyLogo: '/images/companies/techcorp.png',
    status: 'Em Análise',
    appliedAt: '2024-01-20',
    nextStep: 'Entrevista Técnica',
    matchPercentage: 95
  },
  {
    id: 2,
    jobTitle: 'UX/UI Designer',
    company: 'DesignStudio',
    companyLogo: '/images/companies/designstudio.png',
    status: 'Entrevista Agendada',
    appliedAt: '2024-01-18',
    nextStep: 'Entrevista com RH',
    matchPercentage: 88
  }
];

export const mockCandidates = [
  {
    id: 1,
    name: 'João Silva',
    photo: '/images/candidates/joao.png',
    role: 'Desenvolvedor Frontend',
    experience: '5 anos',
    skills: ['React', 'TypeScript', 'Node.js'],
    matchPercentage: 95,
    status: 'Disponível'
  },
  {
    id: 2,
    name: 'Maria Santos',
    photo: '/images/candidates/maria.png',
    role: 'UX Designer',
    experience: '3 anos',
    skills: ['Figma', 'Adobe XD', 'UI Design'],
    matchPercentage: 92,
    status: 'Disponível'
  }
];

export const useJobs = () => {
  const [jobs, setJobs] = useState(mockJobs);
  const [applications, setApplications] = useState(mockApplications);
  const [candidates, setCandidates] = useState(mockCandidates);
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    salary: '',
    skills: []
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleApply = (jobId) => {
    const job = jobs.find(j => j.id === jobId);
    const newApplication = {
      id: applications.length + 1,
      jobTitle: job.title,
      company: job.company,
      companyLogo: job.companyLogo,
      status: 'Em Análise',
      appliedAt: new Date().toISOString().split('T')[0],
      nextStep: 'Análise Curricular',
      matchPercentage: Math.floor(Math.random() * 20) + 80
    };
    setApplications([...applications, newApplication]);
  };

  const handleSaveJob = (jobId) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, saved: !job.saved } : job
    ));
  };

  const handleShare = (jobId) => {
    const job = jobs.find(j => j.id === jobId);
    if (navigator.share) {
      navigator.share({
        title: job.title,
        text: `Vaga de ${job.title} na ${job.company}`,
        url: window.location.href
      });
    }
  };

  const handleFilter = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const getFilteredJobs = () => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = !filters.location || job.location.includes(filters.location);
      const matchesType = !filters.type || job.type === filters.type;
      const matchesSalary = !filters.salary || job.salary.includes(filters.salary);
      const matchesSkills = filters.skills.length === 0 || 
                           filters.skills.every(skill => job.skills.includes(skill));

      return matchesSearch && matchesLocation && matchesType && matchesSalary && matchesSkills;
    });
  };

  const getJobStats = () => {
    return {
      totalJobs: jobs.length,
      activeApplications: applications.length,
      savedJobs: jobs.filter(job => job.saved).length,
      interviews: applications.filter(app => app.status === 'Entrevista Agendada').length
    };
  };

  const getApplicationStats = () => {
    return {
      total: applications.length,
      inReview: applications.filter(app => app.status === 'Em Análise').length,
      interviewed: applications.filter(app => app.status === 'Entrevistado').length,
      accepted: applications.filter(app => app.status === 'Aceito').length
    };
  };

  useEffect(() => {
    // API calls would go here in a real application
  }, []);

  return {
    jobs: getFilteredJobs(),
    applications,
    candidates,
    filters,
    searchTerm,
    handleApply,
    handleSaveJob,
    handleShare,
    handleFilter,
    handleSearch,
    getJobStats,
    getApplicationStats
  };
};

export const jobTypes = [
  'Full-time',
  'Part-time',
  'Freelance',
  'Contrato',
  'Estágio',
  'Híbrido',
  'Remoto'
];

export const salaryRanges = [
  'Até R$ 3.000',
  'R$ 3.000 - R$ 5.000',
  'R$ 5.000 - R$ 8.000',
  'R$ 8.000 - R$ 12.000',
  'Acima de R$ 12.000'
];

export const skillsList = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'Java',
  'Angular',
  'Vue.js',
  'AWS',
  'Docker',
  'Kubernetes',
  'SQL',
  'MongoDB',
  'DevOps',
  'UI/UX',
  'Figma',
  'Adobe XD'
];

export const applicationStatus = {
  REVIEW: 'Em Análise',
  INTERVIEW: 'Entrevista Agendada',
  TECHNICAL: 'Teste Técnico',
  OFFER: 'Proposta',
  ACCEPTED: 'Aceito',
  REJECTED: 'Rejeitado'
};

export const matchingAlgorithm = (candidateSkills, jobSkills) => {
  const matchingSkills = candidateSkills.filter(skill => jobSkills.includes(skill));
  return Math.floor((matchingSkills.length / jobSkills.length) * 100);
};

export const experienceLevels = [
  'Estágio',
  'Júnior',
  'Pleno',
  'Sênior',
  'Especialista',
  'Líder Técnico'
];

export const contractTypes = [
  'CLT',
  'PJ',
  'Temporário',
  'Estágio',
  'Freelancer'
];

export const locations = [
  'São Paulo, SP',
  'Rio de Janeiro, RJ',
  'Belo Horizonte, MG',
  'Curitiba, PR',
  'Porto Alegre, RS',
  'Remoto'
];

export const benefits = [
  'Vale Refeição',
  'Vale Transporte',
  'Plano de Saúde',
  'Plano Odontológico',
  'Gympass',
  'PLR',
  'Home Office',
  'Horário Flexível'
];
