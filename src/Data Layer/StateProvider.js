import React, { createContext, useReducer, useContext } from "react";
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull information from data layer
export const useStatevalue = () => useContext(StateContext);
