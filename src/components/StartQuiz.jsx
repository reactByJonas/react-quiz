import React from 'react';

const StartQuiz = ({ numQuestions, dispatch }) => {
  function handleDispatch() {
    dispatch({ type: 'started' });
  }

  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button onClick={handleDispatch} className="btn btn-ui">
        Let's start
      </button>
    </div>
  );
};

export default StartQuiz;
