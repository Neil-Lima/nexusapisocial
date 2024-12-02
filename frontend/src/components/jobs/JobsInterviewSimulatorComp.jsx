'use client';
import React, { useState } from 'react';
import { useTheme } from '@/context/theme/ThemeContext';
import { SimulatorCard, QuestionCard, ResponseArea } from './styles/JobsStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faVideo, faPause, faRedo } from '@fortawesome/free-solid-svg-icons';

export default function JobsInterviewSimulatorComp() {
  const { theme } = useTheme();
  const [isRecording, setIsRecording] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      question: "Tell me about yourself and your experience with React.",
      tips: ["Focus on relevant experience", "Mention specific projects", "Keep it under 2 minutes"]
    },
    {
      id: 2,
      question: "How do you handle challenging situations in a team?",
      tips: ["Use STAR method", "Provide specific examples", "Highlight communication skills"]
    },
    {
      id: 3,
      question: "Where do you see yourself in 5 years?",
      tips: ["Show ambition", "Align with job role", "Be realistic"]
    }
  ];

  return (
    <SimulatorCard theme={theme}>
      <h4>Interview Simulator</h4>
      <QuestionCard theme={theme}>
        <div className="question-header">
          <span>Question {currentQuestion + 1}/{questions.length}</span>
          <div className="controls">
            <button onClick={() => setIsRecording(!isRecording)}>
              <FontAwesomeIcon icon={isRecording ? faPause : faMicrophone} />
            </button>
            <button>
              <FontAwesomeIcon icon={faVideo} />
            </button>
          </div>
        </div>
        <h5>{questions[currentQuestion].question}</h5>
        <div className="tips">
          <h6>Tips:</h6>
          <ul>
            {questions[currentQuestion].tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </QuestionCard>
      <ResponseArea theme={theme}>
        <div className="response-controls">
          <button className="retry">
            <FontAwesomeIcon icon={faRedo} /> Try Again
          </button>
          <button className="next">
            Next Question
          </button>
        </div>
      </ResponseArea>
    </SimulatorCard>
  );
}
