'use client';
import styled from 'styled-components';

export const StatsContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${props => props.theme.cardBackground};
  border-radius: ${props => props.theme.borderRadius};
  color: white;
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  .filters {
    display: flex;
    gap: 1rem;

    button {
      background: rgba(255, 255, 255, 0.1);
      border: none;
      padding: 0.5rem 1rem;
      border-radius: ${props => props.theme.borderRadius};
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: ${props => props.theme.primaryColor};
      }

      &.active {
        background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      }
    }
  }
`;

export const ScoreSection = styled.div`
  margin-bottom: 2rem;

  .score-display {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: ${props => props.theme.borderRadius};
    text-align: center;

    .score {
      font-size: 3rem;
      font-weight: bold;
      background: ${props => `linear-gradient(${props.theme.gradientDirection}, ${props.theme.primaryColor}, ${props.theme.secondaryColor})`};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 1rem 0;
    }

    .score-breakdown {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
      margin-top: 1rem;

      .category {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: ${props => props.theme.borderRadius};
      }
    }
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export const MetricCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: ${props => props.theme.borderRadius};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadow};
  }

  h4 {
    margin-bottom: 1rem;
  }

  .value {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .trend {
    margin-bottom: 1rem;
    
    &.up { color: #4CAF50; }
    &.down { color: #F44336; }
    &.stable { color: #FFC107; }
  }

  .chart {
    height: 60px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: ${props => props.theme.borderRadius};
  }
`;

export const ChartSection = styled.div`
  margin-bottom: 2rem;

  .chart-container {
    height: 300px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
    padding: 1rem;
  }
`;

export const AmenitiesSection = styled.div`
  margin-bottom: 2rem;

  .amenities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;

    .amenity-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: ${props => props.theme.borderRadius};

      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.primaryColor};
        border-radius: 50%;
      }

      .info {
        h4 {
          margin-bottom: 0.25rem;
        }

        .rating {
          color: #FFC107;
        }
      }
    }
  }
`;

export const TransportSection = styled.div`
  margin-bottom: 2rem;

  .transport-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;

    .transport-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: ${props => props.theme.borderRadius};

      .icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => props.theme.primaryColor};
        border-radius: 50%;
      }

      .details {
        h4 {
          margin-bottom: 0.25rem;
        }

        .frequency {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }
`;

export const SafetySection = styled.div`
  .safety-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;

    .safety-card {
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: ${props => props.theme.borderRadius};

      h4 {
        margin-bottom: 0.5rem;
      }

      .value {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      .trend {
        font-size: 0.9rem;
        
        &.better { color: #4CAF50; }
        &.worse { color: #F44336; }
        &.similar { color: #FFC107; }
      }
    }
  }

  .safety-map {
    height: 300px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: ${props => props.theme.borderRadius};
  }
`;
