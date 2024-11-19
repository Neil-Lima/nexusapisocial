'use client';
import styled, { keyframes } from 'styled-components';
import { Card } from 'react-bootstrap';

// Animações
const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Container Principal
export const Container = styled.div`
  padding: 20px;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
`;

// Estilos do Swipe
export const SwipeContainer = styled.div`
  position: relative;
  height: 600px;
  max-width: 400px;
  margin: 0 auto;
`;

export const SwipeCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: ${props => props.theme.cardBackground};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;



export const ProfileInfo = styled.div`
  padding: 20px;
  color: ${props => props.theme.textColor};

  h2 {
    margin: 0;
    font-size: 24px;
  }

  p {
    margin: 10px 0;
    opacity: 0.8;
  }
`;

export const SwipeActions = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
`;



// Estilos do Chat
export const ChatContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
`;

export const ChatHeader = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  h3 {
    margin: 0;
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MessageBubble = styled.div`
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 15px;
  background: ${props => props.$isSent ? 
    props.theme.primaryColor : 
    'rgba(255, 255, 255, 0.1)'};
  align-self: ${props => props.$isSent ? 'flex-end' : 'flex-start'};
  color: ${props => props.theme.textColor};

  span {
    display: block;
    font-size: 12px;
    opacity: 0.7;
    margin-top: 5px;
  }
`;

export const ChatActions = styled.div`
  padding: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.textColor};

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

// Estilos dos Matches
export const MatchesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const MatchCard = styled.div`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const MatchImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const MatchInfo = styled.div`
  flex: 1;

  h3 {
    margin: 0;
    color: ${props => props.theme.textColor};
  }

  p {
    margin: 5px 0;
    opacity: 0.7;
  }
`;

export const MatchActions = styled.div`
  display: flex;
  gap: 10px;

  button {
    background: none;
    border: none;
    color: ${props => props.theme.textColor};
    opacity: 0.7;
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }
`;

// Estilos do Modal de Match
export const MatchModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s ease;
`;

export const MatchContent = styled.div`
  background: ${props => props.theme.cardBackground};
  padding: 30px;
  border-radius: ${props => props.theme.borderRadius};
  text-align: center;
  max-width: 500px;
  width: 90%;

  h2 {
    color: ${props => props.theme.primaryColor};
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

export const MatchProfiles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px 0;

  .profile {
    text-align: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-bottom: 15px;
    }
  }

  .heart-icon {
    color: ${props => props.theme.primaryColor};
    font-size: 40px;
  }
`;

// Estilos dos Filtros
export const FilterContainer = styled.div`
  padding: 20px;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 20px;
`;

export const FilterGroup = styled.div`
  margin-bottom: 20px;

  h4 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    color: ${props => props.theme.textColor};
  }
`;

export const FilterSlider = styled.input`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.theme.primaryColor};
    cursor: pointer;
  }
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};
  outline: none;

  option {
    background: ${props => props.theme.cardBackground};
  }
`;

// Estilos do Profile
export const ProfileContainer = styled.div`
  padding: 20px;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
`;



export const ProfilePhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 30px;

  .photo-container {
    position: relative;
    aspect-ratio: 1;
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    button {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background: rgba(0, 0, 0, 0.5);
      border: none;
      color: white;
      padding: 8px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

export const PhotosContainer = styled.div`
  padding: 20px;

  h3 {
    color: ${props => props.theme.textColor};
    margin-bottom: 20px;
  }
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
`;

export const PhotoCard = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.upload-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;

    button {
      background: none;
      border: none;
      color: ${props => props.theme.textColor};
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const PhotoActions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  display: flex;
  justify-content: space-around;

  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

// Estilos das Preferências
export const PreferencesContainer = styled.div`
  padding: 20px;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
`;

export const PreferenceSection = styled.div`
  margin-bottom: 30px;

  h3 {
    color: ${props => props.theme.textColor};
    margin-bottom: 20px;
  }
`;

export const PreferenceToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  color: ${props => props.theme.textColor};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  input[type="checkbox"] {
    width: 40px;
    height: 20px;
    appearance: none;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    &:checked {
      background: ${props => props.theme.primaryColor};
    }

    &:before {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      top: 2px;
      left: 2px;
      transition: transform 0.3s;
    }

    &:checked:before {
      transform: translateX(20px);
    }
  }
`;

export const PreferenceSlider = styled.div`
  margin: 20px 0;

  label {
    display: block;
    margin-bottom: 10px;
    color: ${props => props.theme.textColor};
  }

  input {
    width: 100%;
  }
`;

// Estilos da Localização
export const LocationContainer = styled.div`
  padding: 20px;
`;

export const LocationSearch = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    background: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.textColor};
  }

  button {
    padding: 10px 20px;
    background: ${props => props.theme.primaryColor};
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    cursor: pointer;
  }
`;

export const LocationMap = styled.div`
  height: 300px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: 20px;
`;

export const LocationInfo = styled.div`
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};

  h4 {
    margin: 0 0 10px 0;
  }

  p {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
  }
`;

// Estilos dos Interesses
export const InterestsContainer = styled.div`
  padding: 20px;
`;

export const InterestSearch = styled.div`
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    background: rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.textColor};
  }
`;

export const InterestGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

export const InterestTag = styled.div`
  padding: 8px 15px;
  border-radius: 20px;
  background: ${props => props.$selected ? 
    props.theme.primaryColor : 
    'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.theme.textColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Estilos da Verificação
export const VerificationContainer = styled.div`
  padding: 20px;
`;

export const VerificationStep = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.1)' : 
    'rgba(255, 255, 255, 0.05)'};
  border-radius: ${props => props.theme.borderRadius};
  opacity: ${props => props.$active ? 1 : 0.7};
`;

export const VerificationCamera = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.theme.borderRadius};
  margin-top: 15px;

  button {
    padding: 15px 30px;
    background: ${props => props.theme.primaryColor};
    border: none;
    border-radius: ${props => props.theme.borderRadius};
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const VerificationStatus = styled.div`
  text-align: center;
  padding: 30px;
  background: ${props => props.$verified ? 
    'rgba(46, 213, 115, 0.1)' : 
    'rgba(255, 255, 255, 0.1)'};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.textColor};

  svg {
    font-size: 40px;
    color: ${props => props.$verified ? '#2ed573' : props.theme.textColor};
    margin-bottom: 15px;
  }
`;

export const ProfileBio = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.borderRadius};
  margin: 20px 0;

  h4 {
    color: ${props => props.theme.textColor};
    margin-bottom: 10px;
  }

  p {
    color: ${props => props.theme.textColor};
    opacity: 0.8;
    line-height: 1.6;
  }
`;

export const ProfileInterests = styled.div`
  padding: 20px;
  
  h4 {
    color: ${props => props.theme.textColor};
    margin-bottom: 15px;
  }

  .interests-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    span {
      padding: 8px 15px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      color: ${props => props.theme.textColor};
    }
  }
`;


export const MainCard = styled(Card)`
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  padding: 20px;
`;

export const ProfileHeader = styled.div`
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: ${props => props.theme.textColor};
    margin: 15px 0 5px;
  }

  p {
    color: ${props => props.theme.textColor};
    opacity: 0.7;
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid ${props => props.theme.primaryColor};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  display: block;
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 12px;
  background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    font-size: 18px;
  }
`;
// ... outros estilos existentes ...

export const MainNav = styled.div`
  margin-bottom: 20px;
  
  .nav-pills {
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: ${props => props.theme.borderRadius};
    
    .nav-link {
      color: ${props => props.theme.textColor};
      display: flex;
      align-items: center;
      gap: 8px;
      
      &.active {
        background: ${props => props.theme.primaryColor};
      }
      
      &:hover:not(.active) {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

export const ContentArea = styled.div`
  min-height: 500px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
`;
