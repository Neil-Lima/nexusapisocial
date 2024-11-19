'use client';
import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faMapMarkerAlt, faDollarSign, faBriefcase, faClock, faBookmark, faShare, faChartLine, faUsers, faMedal } from '@fortawesome/free-solid-svg-icons';
import { JobCard, JobTitle, JobInfo, StyledBadge, StyledButton, JobList, CompanyInsights } from './styles/JobsStyle';
import { handleJobClick, handleSaveJob, handleShareJob } from './utils/JobsUtils';

function JobsListComp({ 
  filteredJobs, 
  currentPage, 
  jobsPerPage, 
  setSelectedJob, 
  setShowModal, 
  setSkillMatchPercentage,
  setSavedJobs,
  userProfile 
}) {
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <JobList>
      <Row>
        {currentJobs.map(job => (
          <Col md={12} key={job.id}>
            <JobCard theme={theme} whileHover={{ scale: 1.02 }}>
              <Row>
                <Col md={2}>
                  <img 
                    src={job.companyLogo || "https://via.placeholder.com/100"} 
                    alt={job.company}
                    className="company-logo"
                  />
                </Col>
                <Col md={7}>
                  <JobTitle>{job.title}</JobTitle>
                  <JobInfo>
                    <FontAwesomeIcon icon={faBuilding} />
                    {job.company}
                  </JobInfo>
                  <JobInfo>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    {`${job.location.city}, ${job.location.state}, ${job.location.country}`}
                  </JobInfo>
                  <JobInfo>
                    <FontAwesomeIcon icon={faDollarSign} />
                    {job.salary}
                  </JobInfo>
                  <JobInfo>
                    <FontAwesomeIcon icon={faBriefcase} />
                    {job.type}
                  </JobInfo>
                  <JobInfo>
                    <FontAwesomeIcon icon={faClock} />
                    {job.experience}
                  </JobInfo>

                  <div className="mt-2">
                    {job.skills.map((skill, index) => (
                      <StyledBadge key={index} variant={userProfile.skills.includes(skill) ? "success" : "secondary"}>
                        {skill}
                      </StyledBadge>
                    ))}
                  </div>

                  <div className="mt-2">
                    {job.benefits.map((benefit, index) => (
                      <Badge key={index} bg="info" className="me-1">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </Col>
                <Col md={3}>
                  <div className="text-center">
                    <StyledBadge variant="primary" className="mb-2">
                      {job.matchScore}% Match
                    </StyledBadge>
                    <div className="d-grid gap-2">
                      <StyledButton
                        onClick={() => handleJobClick(job, setSelectedJob, setShowModal, setSkillMatchPercentage)}
                      >
                        Ver Detalhes
                      </StyledButton>
                      <StyledButton
                        variant="outline-primary"
                        onClick={() => handleSaveJob(job.id, setSavedJobs)}
                      >
                        <FontAwesomeIcon icon={faBookmark} /> Salvar
                      </StyledButton>
                      <StyledButton
                        variant="outline-secondary"
                        onClick={() => handleShareJob(job)}
                      >
                        <FontAwesomeIcon icon={faShare} /> Compartilhar
                      </StyledButton>
                    </div>
                  </div>
                </Col>
              </Row>

              <CompanyInsights className="mt-3">
                <Row>
                  <Col md={4}>
                    <div className="insight-item">
                      <FontAwesomeIcon icon={faChartLine} />
                      <h6>Crescimento</h6>
                      <p>{job.companyInsights.growth}% ao ano</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="insight-item">
                      <FontAwesomeIcon icon={faUsers} />
                      <h6>Funcionários</h6>
                      <p>{job.companyInsights.employees}</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="insight-item">
                      <FontAwesomeIcon icon={faMedal} />
                      <h6>Avaliação</h6>
                      <p>{job.companyInsights.rating}/5</p>
                    </div>
                  </Col>
                </Row>
              </CompanyInsights>
            </JobCard>
          </Col>
        ))}
      </Row>

      <StyledPagination className="justify-content-center mt-4">
        {[...Array(Math.ceil(filteredJobs.length / jobsPerPage)).keys()].map(number => (
          <Pagination.Item 
            key={number + 1} 
            active={number + 1 === currentPage} 
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
      </StyledPagination>
    </JobList>
  );
}

export default JobsListComp;
