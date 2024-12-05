'use client';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/theme/ThemeContext';
import { GradientBackground } from '../styles/LoginMainStyles';
import { useLoginMain } from '../utils/LoginMainUtils';
import LoginFormComp from '../../form/LoginForm/components/LoginFormComp';
import LoginSignupModalComp from '../../modal/LoginSignupModal/components/LoginSignupModalComp';
import LoginResultModalComp from '../../modal/LoginResultModal/components/LoginResultModalComp';

function LoginMainComp() {
  const { theme } = useTheme();
  const {
    showModal,
    profileImage,
    coverImage,
    handleModalClose,
    handleModalShow,
    handleLoginSubmit,
    handleSignupSubmit,
    handleImageUpload,
    setProfileImage,
    setCoverImage,
    showResultModal,
    setShowResultModal,
    resultModalContent,
    anos,
    meses,
    dias
  } = useLoginMain();

  return (
    <GradientBackground theme={theme}>
      <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center">
        <Row className="w-100">
          <Col md={6} lg={4} className="mx-auto">
            <LoginFormComp 
              handleLoginSubmit={handleLoginSubmit}
              handleModalShow={handleModalShow}
            />
          </Col>
        </Row>

        <LoginSignupModalComp 
          showModal={showModal}
          handleModalClose={handleModalClose}
          handleSignupSubmit={handleSignupSubmit}
          profileImage={profileImage}
          coverImage={coverImage}
          handleImageUpload={handleImageUpload}
          setProfileImage={setProfileImage}
          setCoverImage={setCoverImage}
          anos={anos}
          meses={meses}
          dias={dias}
        />

        <LoginResultModalComp 
          showResultModal={showResultModal}
          setShowResultModal={setShowResultModal}
          resultModalContent={resultModalContent}
        />
      </Container>
    </GradientBackground>
  );
}

export default LoginMainComp;
