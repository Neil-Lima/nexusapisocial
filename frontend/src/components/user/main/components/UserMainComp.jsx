"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "@/context/theme/ThemeContext";
import UserHeaderComp from "../../header/components/UserHeaderComp";
import UserTabsComp from "../../tabs/components/UserTabsComp";
import UserExperienceComp from "../../experience/components/UserExperienceComp";
import UserInterestsComp from "../../tabs/interests/components/UserInterestsComp";

export default function UserMainComp() {
  const { theme } = useTheme();

  return (
    <Container>
      <Row>
        <Col lg={9}>
          <UserHeaderComp />
          <UserTabsComp />
        </Col>

        <Col lg={3}>
          <UserExperienceComp />
          
        </Col>
      </Row>
    </Container>
  );
}
