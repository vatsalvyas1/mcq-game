import React from 'react';
import styled from 'styled-components';

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
/* abc */
const ScoreText = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const RestartButton = styled.button`
  padding: 10px 20px;
  background-color: #78E791;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
    box-shadow: 3px 3px rgb(0,0,0,0.7);
  }

  &:focus {
    outline: none;
    background-color: #218838;
  }
`;

const Score = ({ score, totalQuestions, onRestart }) => {
  return (
    <ScoreContainer>
      <ScoreText>Your score: {score} / {totalQuestions}</ScoreText>
      <RestartButton onClick={onRestart}>Restart</RestartButton>
    </ScoreContainer>
  );
};

export default Score;
