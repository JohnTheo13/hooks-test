import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from "./reducer";

const StoreContext = createContext(initialState);

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
};

export { StoreContext };
