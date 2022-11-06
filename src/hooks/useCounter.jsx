import { createContext, useReducer } from 'react';

export const countContext = createContext();

const newState = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: (state.count = 0) };
      default:
        throw new Error();
    }  
};

const useCounter = () => {
    const [state, dispatch] = useReducer(newState, { count: 0 });

    const value = [ state, dispatch ];

  return (
    <div>{value}</div>
  )
};

export default useCounter;
