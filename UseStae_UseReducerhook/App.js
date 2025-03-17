import React, { useState, useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div>
      <h1>React State Management Example</h1>
      
      {/* Section for showing/hiding text using useState */}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>This is a toggled text!</p>}
      
      {/* Section for counter using useReducer */}
      <div>
        <p>Counter: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
