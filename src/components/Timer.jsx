import { useEffect } from 'react';

function Timer({ dispatch, secRemainder }) {
  const mins = Math.floor(secRemainder / 60);
  const secs = secRemainder % 60;
  useEffect(() => {
    const id = setInterval(() => {
      return dispatch({ type: 'timer' });
    }, 1000);
    //return clearInterval(id);
  }, []);
  return (
    <div className="timer">
      {mins < 10 && '0'}
      {mins}:{secs < 10 && '0'}
      {secs}
    </div>
  );
}

export default Timer;
