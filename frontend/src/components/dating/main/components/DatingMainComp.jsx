"use client";
import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme/ThemeContext";
import DatingProfileComp from "../../profile/components/DatingProfileComp";
import DatingPreferencesComp from "../../preferences/components/DatingPreferencesComp";
import DatingMatchCardComp from "../../card/components/DatingMatchCardComp";
import {
  MainContainer,
  LocationHeader,
  SearchContainer,
} from "../styles/DatingMainStyles";
import StoriesComp from "@/shared/stories/StoriesComp";
import DatingStoriesComp from "../../stories/components/DatingStoriesComp";

export default function DatingMainComp() {
  const { theme } = useTheme();

  return (
    <MainContainer>
      
      <Container fluid>      
        <Row>
          <Col lg={3}>
            <DatingProfileComp />
            <br />
          </Col>
          <Col lg={7}>
          
            <Row className="g-4">
              <DatingStoriesComp/>
              <SearchContainer>
                <InputGroup>
                  <Form.Control
                    placeholder="Digite um bairro para encontrar pessoas próximas..."
                    aria-label="Buscar por bairro"
                  />
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </InputGroup>

                <LocationHeader>
                  <h4>Conheça pessoas de:</h4>
                  <h2>Belém PA - Umarizal</h2>
                </LocationHeader>
              </SearchContainer>              
              <DatingMatchCardComp />
            </Row>
          </Col>

          <Col lg={2}>
            <DatingPreferencesComp />
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
}
