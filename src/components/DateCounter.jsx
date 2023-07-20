import { useReducer } from 'react';

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + state.step };
    case 'dec':
      return { ...state, count: state.count - state.step };
    case 'reset':
      return initialState;
    case 'setCount':
      return { ...state, count: action.payload };
    case 'setStep':
      return { ...state, step: action.payload };

    default:
      throw new Error('unknown action');
  }

  /*   if (action.type === 'inc') return state + 1;
  if (action.type === 'dec') return state - 1;
  if (action.type === 'reset') return 0;
  if (action.type === 'setCount') return action.payload;
 */
}
function DateCounter() {
  //const [count, setCount] = useState(0);
  //const [step, setStep] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  // This mutates the date object.
  const date = new Date('june 21 2027');
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: 'dec' });

    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: 'inc' });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: 'setCount', payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: 'setStep', payload: Number(e.target.value) });

    //setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: 'reset', payload: initialState });

    //setCount(0);
    //setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
