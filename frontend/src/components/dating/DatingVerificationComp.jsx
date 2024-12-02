'use client';
import React from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { useDating } from './utils/DatingUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCamera, faShield } from '@fortawesome/free-solid-svg-icons';
import {
  VerificationContainer,
  VerificationStep,
  VerificationCamera,
  VerificationStatus
} from './styles/DatingStyles';

function DatingVerificationComp() {
  const { theme } = useTheme();
  const {
    verificationStatus,
    currentStep,
    handleVerificationPhoto,
    handleVerificationSubmit,
    isVerified
  } = useDating();

  return (
    <VerificationContainer theme={theme}>
      <h3>Profile Verification</h3>
      
      {isVerified ? (
        <VerificationStatus theme={theme} $verified>
          <FontAwesomeIcon icon={faShield} />
          <h4>Verified Profile</h4>
          <p>Your profile is verified and trusted by our community</p>
        </VerificationStatus>
      ) : (
        <>
          <VerificationStep theme={theme} $active={currentStep === 1}>
            <h4>Step 1: Take a Selfie</h4>
            <VerificationCamera theme={theme}>
              <button onClick={() => handleVerificationPhoto(1)}>
                <FontAwesomeIcon icon={faCamera} />
                Take Photo
              </button>
            </VerificationCamera>
          </VerificationStep>

          <VerificationStep theme={theme} $active={currentStep === 2}>
            <h4>Step 2: Strike a Pose</h4>
            <VerificationCamera theme={theme}>
              <button onClick={() => handleVerificationPhoto(2)}>
                <FontAwesomeIcon icon={faCamera} />
                Take Photo
              </button>
            </VerificationCamera>
          </VerificationStep>

          <button 
            className="submit-verification"
            onClick={handleVerificationSubmit}
            disabled={!verificationStatus.allPhotosComplete}
          >
            <FontAwesomeIcon icon={faCheck} />
            Submit for Verification
          </button>
        </>
      )}
    </VerificationContainer>
  );
}

export default DatingVerificationComp;
