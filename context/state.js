//context/state.js
import { createContext, useContext } from 'react';
import fetch from 'isomorphic-unfetch';
import router, { useRouter } from 'next/router';


const AppContext = createContext();
let sharedState = { account: null };

export function AppWrapper({ children }) {
  console.log("SharedState ", sharedState)
  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export async function updateAccount(key) {
  console.log("dfdsfssfsd ", key);
  sharedState.account = key;

  try {
    const res = await fetch('http://localhost:3000/api/test', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userName : null, key: key})
    })
    router.push('/')
  } catch (error) {
    console.log(error);
  }
}

export function useAppContext() {
  return useContext(AppContext);
}
