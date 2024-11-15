'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground } from '@/components/login/styles/LoginStyles';
import { useLoginForm } from '@/components/login/utils/LoginUtils';
import LoginFormComp from '@/components/login/LoginFormComp';
import LoginSignupModalComp from '@/components/login/LoginSignupModalComp';
import LoginResultModalComp from '@/components/login/LoginResultModalComp';

export default function LoginPage() {
  const { theme } = useTheme();
  const loginForm = useLoginForm();

  return (
    <GradientBackground theme={theme}>
      <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">
        <Row className="w-100">
          <Col md={6} lg={4} className="mx-auto">
            <LoginFormComp 
              handleLoginSubmit={loginForm.handleLoginSubmit}
              handleModalShow={loginForm.handleModalShow}
            />
          </Col>
        </Row>

        <LoginSignupModalComp 
          showModal={loginForm.showModal}
          handleModalClose={loginForm.handleModalClose}
          handleSignupSubmit={loginForm.handleSignupSubmit}
          profileImage={loginForm.profileImage}
          coverImage={loginForm.coverImage}
          handleImageUpload={loginForm.handleImageUpload}
          setProfileImage={loginForm.setProfileImage}
          setCoverImage={loginForm.setCoverImage}
          anos={loginForm.anos}
          meses={loginForm.meses}
          dias={loginForm.dias}
        />

        <LoginResultModalComp 
          showResultModal={loginForm.showResultModal}
          setShowResultModal={loginForm.setShowResultModal}
          resultModalContent={loginForm.resultModalContent}
        />
      </Container>
    </GradientBackground>
  );
}
