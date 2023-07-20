import React from 'react';

const Progress = ({ index, score, numQuestions, maxScore, answer }) => {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <div>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </div>
      <div>
        <strong>{score}</strong> / {maxScore}
      </div>
    </header>
  );
};

export default Progress;
