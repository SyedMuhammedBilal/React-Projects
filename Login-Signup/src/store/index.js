import React, { useContext, useReducer, createContext } from "react";

export const DataContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataContext);
