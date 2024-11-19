'use client';
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBriefcase, faGraduationCap, faTrophy, faIndustry, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { Line, Bar } from 'react-chartjs-2';
import { InsightsSection, InsightCard, StyledButton } from './styles/JobsStyle';

function JobsInsightsComp({ careerInsights, userProfile, industry }) {
  return (
    <InsightsSection>
      <h4>Insights de Carreira</h4>

      {/* Tendências Salariais */}
      <InsightCard>
        <h5>
          <FontAwesomeIcon icon={faChartLine} /> Tendências Salariais
        </h5>
        <Line
          data={careerInsights.salaryTrends}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom'
              }
            }
          }}
        />
        <p>Média salarial para {userProfile.title}: R$ {careerInsights.averageSalary}</p>
      </InsightCard>

      {/* Demanda do Mercado */}
      <InsightCard>
        <h5>
          <FontAwesomeIcon icon={faBriefcase} /> Demanda do Mercado
        </h5>
        <Bar
          data={careerInsights.marketDemand}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom'
              }
            }
          }}
        />
        <p>{careerInsights.demandGrowth}% de crescimento nos últimos 12 meses</p>
      </InsightCard>

      {/* Habilidades em Alta */}
      <InsightCard>
        <h5>
          <FontAwesomeIcon icon={faGraduationCap} /> Habilidades em Alta
        </h5>
        <Row>
          {careerInsights.topSkills.map((skill, index) => (
            <Col key={index} md={6}>
              <Card className="mb-2">
                <Card.Body>
                  <Card.Title>{skill.name}</Card.Title>
                  <Card.Text>{skill.demand}% de demanda</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </InsightCard>

      {/* Certificações Valorizadas */}
      <InsightCard>
        <h5>
          <FontAwesomeIcon icon={faTrophy} /> Certificações Valorizadas
        </h5>
        {careerInsights.certifications.map((cert, index) => (
          <div key={index} className="mb-2">
            <h6>{cert.name}</h6>
            <p>Aumento salarial médio: {cert.salaryIncrease}%</p>
          </div>
        ))}
      </InsightCard>

      {/* Análise Setorial */}
      <InsightCard>
        <h5>
          <FontAwesomeIcon icon={faIndustry} /> Análise Setorial
        </h5>
        <div>
          <h6>Principais Empresas Contratando</h6>
          {careerInsights.topCompanies.map((company, index) => (
            <div key={index} className="mb-2">
              <p>{company.name} - {company.openings} vagas abertas</p>
            </div>
          ))}
        </div>
      </InsightCard>

      {/* Distribuição Geográfica */}
      <InsightCard>
        <h5>
          <FontAwesomeIcon icon={faMapMarked} /> Distribuição Geográfica
        </h5>
        <div>
          {careerInsights.geographicDistribution.map((region, index) => (
            <div key={index} className="mb-2">
              <p>{region.name}: {region.percentage}% das vagas</p>
            </div>
          ))}
        </div>
      </InsightCard>

      <StyledButton className="w-100 mt-3">
        Ver Relatório Completo
      </StyledButton>
    </InsightsSection>
  );
}

export default JobsInsightsComp;
