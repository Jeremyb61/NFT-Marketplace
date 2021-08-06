//context/state.js
import { createContext, useContext } from 'react';

const AppContext = createContext();
let sharedState = { account: null};

export function AppWrapper({ children }) {
  console.log("SharedState ", sharedState)
  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function updateAccount(key) {
  console.log("dfdsfssfsd ", key);
  sharedState.account = key;
}

export function useAppContext() {
  return useContext(AppContext);
}
