import { createContext, useReducer} from 'react';
import newState from './useReducer';

export const countContext = createContext();

const CounterContext = (props) => {
    const [state, dispatch] = useReducer(newState, { count: 0 });

  return (
    <countContext.Provider value={{
        state,
        dispatch,
        newState
    }}>
        {props.children}
    </countContext.Provider>
  )
};

export default CounterContext;
