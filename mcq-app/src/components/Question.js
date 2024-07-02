import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Title = styled.h2`
  font-size: 2rem;
  color: #0CB4EF;
  text-align: center;
  margin-top: 20px;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
      
  }
    &:hover {
    text-decoration: underline;
  }
`;
/* abc */
const QuestionContainer = styled.div`
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

const QuestionText = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const OptionButton = styled.button`
  margin: 5px;
  padding: 10px;
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  ${({ isCorrect, clickedOption }) =>
    clickedOption &&
    css`
      background-color: ${isCorrect ? '#28a745' : '#dc3545'};
    `}

  &:hover {
    background-color: #0056b3;
    box-shadow: 3px 3px rgb(0,0,0,0.7);
  }

  &:focus {
    outline: none;
    background-color: #0056b3;
  }
`;

const Question = ({ questionData, onSelectOption, onNextQuestion }) => {
  const { question, options, answer } = questionData;
  const [clickedOption, setClickedOption] = useState(null);

  const handleClick = (option) => {
    setClickedOption(option);
    if (option === answer) {
      setTimeout(() => {
        onSelectOption(option);
        onNextQuestion();
      }, 500);
    } else {
      setTimeout(() => {
        onSelectOption(option);
        onNextQuestion();
      }, 500); 
    }
  };

  useEffect(() => {
    setClickedOption(null); 
  }, [question]);

  return (
    <>
      <Title>React MCQ Questions</Title>
      <QuestionContainer>
        <QuestionText>{question}</QuestionText>
        <OptionsContainer>
          {options.map((option, index) => (
            <OptionButton
              key={index}
              onClick={() => handleClick(option)}
              isCorrect={option === answer}
              clickedOption={clickedOption === option}
            >
              {option}
            </OptionButton>
          ))}
        </OptionsContainer>
      </QuestionContainer>
    </>
  );
};

export default Question;
