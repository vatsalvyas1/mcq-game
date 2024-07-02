import React, { useState } from 'react';
import styled from 'styled-components';
import questions from './data/questions';
import Question from './components/Question';
import Score from './components/Score';
import GlobalStyles from './GlobalStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
`;

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleSelectOption = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <TransitionGroup>
          {showScore ? (
            <CSSTransition key="score" timeout={300} classNames="fade">
              <Score score={score} totalQuestions={questions.length} onRestart={handleRestart} />
            </CSSTransition>
          ) : (
            <CSSTransition key={currentQuestionIndex} timeout={300} classNames="fade">
              <Question
                questionData={questions[currentQuestionIndex]}
                onSelectOption={handleSelectOption}
                onNextQuestion={handleNextQuestion}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
      </AppContainer>
    </>
  );
};

export default App;
