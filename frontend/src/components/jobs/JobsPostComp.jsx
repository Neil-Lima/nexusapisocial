'use client';
import React, { useState } from 'react';
import { Form, Row, Col, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBriefcase, faBuilding, faMapMarkerAlt, faDollarSign, faList, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { StyledModal, StyledForm, StyledSelect, StyledButton } from './styles/JobsStyle';
import { handleNewJobChange, handleLocationChange, handlePostJob } from './utils/JobsUtils';

function JobsPostComp({ showPostJobModal, setShowPostJobModal, jobs, setJobs, setFilteredJobs, userProfile }) {
  const [newJob, setNewJob] = useState({
    title: '',
    company: userProfile?.company || '',
    location: {
      country: '',
      state: '',
      city: ''
    },
    salary: '',
    type: '',
    experience: '',
    description: '',
    responsibilities: [],
    requirements: [],
    benefits: [],
    skills: [],
    industry: [],
    workModel: '',
    contractType: '',
    department: '',
    reportingTo: '',
    teamSize: '',
    travelRequirements: '',
    languages: [],
    certifications: [],
    additionalInfo: ''
  });

  const [step, setStep] = useState(1);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <>
            <h5>Informações Básicas</h5>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Título da Vaga</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={newJob.title}
                    onChange={(e) => handleNewJobChange(e, setNewJob)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Empresa</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    value={newJob.company}
                    onChange={(e) => handleNewJobChange(e, setNewJob)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>País</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={newJob.location.country}
                    onChange={(e) => handleLocationChange(e, setNewJob)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={newJob.location.state}
                    onChange={(e) => handleLocationChange(e, setNewJob)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={newJob.location.city}
                    onChange={(e) => handleLocationChange(e, setNewJob)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Faixa Salarial</Form.Label>
                  <Form.Control
                    type="text"
                    name="salary"
                    value={newJob.salary}
                    onChange={(e) => handleNewJobChange(e, setNewJob)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Tipo de Contratação</Form.Label>
                  <StyledSelect
                    name="contractType"
                    value={newJob.contractType}
                    onChange={(e) => handleNewJobChange(e, setNewJob)}
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="CLT">CLT</option>
                    <option value="PJ">PJ</option>
                    <option value="Temporário">Temporário</option>
                    <option value="Estágio">Estágio</option>
                  </StyledSelect>
                </Form.Group>
              </Col>
            </Row>
          </>
        );

      case 2:
        return (
          <>
            <h5>Detalhes da Vaga</h5>
            <Form.Group className="mb-3">
              <Form.Label>Descrição da Vaga</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={newJob.description}
                onChange={(e) => handleNewJobChange(e, setNewJob)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Responsabilidades (separadas por vírgula)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="responsibilities"
                value={newJob.responsibilities.join(', ')}
                onChange={(e) => setNewJob({...newJob, responsibilities: e.target.value.split(',')})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Requisitos (separados por vírgula)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="requirements"
                value={newJob.requirements.join(', ')}
                onChange={(e) => setNewJob({...newJob, requirements: e.target.value.split(',')})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Benefícios (separados por vírgula)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="benefits"
                value={newJob.benefits.join(', ')}
                onChange={(e) => setNewJob({...newJob, benefits: e.target.value.split(',')})}
                required
              />
            </Form.Group>
          </>
        );

      case 3:
        return (
          <>
            <h5>Informações Adicionais</h5>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Departamento</Form.Label>
                  <Form.Control
                    type="text"
                    name="department"
                    value={newJob.department}
                    onChange={(e) => handleNewJobChange(e, setNewJob)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Reporta-se a</Form.Label>
                  <Form.Control
                    type="text"
                    name="reportingTo"
                    value={newJob.reportingTo}
                    onChange={(e) => handleNewJobChange(e, setNewJob)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Tamanho da Equipe</Form.Label>
                  <Form.Control
                    type="text"
                    name="teamSize"
                    value={newJob.teamSize}
                    onChange={(e) => handleNewJobChange(e, setNewJob)}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Requisitos de Viagem</Form.Label>
                  <Form.Control
                    type="text"
                    name="travelRequirements" 
                    value={newJob.travelRequirements}
                    onChange={(e) => handleNewJobChange(e, setNewJob)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Idiomas Necessários (separados por vírgula)</Form.Label>
              <Form.Control
                type="text"
                name="languages"
                value={newJob.languages.join(', ')}
                onChange={(e) => setNewJob({...newJob, languages: e.target.value.split(',')})}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Certificações Desejadas (separadas por vírgula)</Form.Label>
              <Form.Control
                type="text"
                name="certifications"
                value={newJob.certifications.join(', ')}
                onChange={(e) => setNewJob({...newJob, certifications: e.target.value.split(',')})}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Informações Adicionais</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="additionalInfo"
                value={newJob.additionalInfo}
                onChange={(e) => handleNewJobChange(e, setNewJob)}
              />
            </Form.Group>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <StyledButton onClick={() => setShowPostJobModal(true)} className="w-100 mb-3">
        <FontAwesomeIcon icon={faPlus} /> Anunciar Nova Vaga
      </StyledButton>

      <StyledModal show={showPostJobModal} onHide={() => setShowPostJobModal(false)} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Anunciar Nova Vaga</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StyledForm onSubmit={(e) => handlePostJob(e, newJob, jobs, setJobs, setFilteredJobs, setShowPostJobModal, setNewJob)}>
            {renderStep()}
            
            <div className="d-flex justify-content-between mt-4">
              {step > 1 && (
                <StyledButton type="button" onClick={handleBack}>
                  Voltar
                </StyledButton>
              )}
              {step < 3 ? (
                <StyledButton type="button" onClick={handleNext}>
                  Próximo
                </StyledButton>
              ) : (
                <StyledButton type="submit">
                  Publicar Vaga
                </StyledButton>
              )}
            </div>
          </StyledForm>
        </Modal.Body>
      </StyledModal>
    </>
  );
}

export default JobsPostComp;

