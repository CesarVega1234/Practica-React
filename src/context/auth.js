import React, { createContext,useState, useEffect } from 'react';
import { watchUserChanges }from '../services/firebase';

export const AuthContext = createContext();

export  function AuthContextProvider(props) {
  
  const [state,setState] = useState({
    isLoggedIn:false,
    authReady:false,
    user:null
  });

  useEffect(()=>{
    //Verifica existencia de usuario
    watchUserChanges((user)=>{
      if (user) {
          setState({
            isLoggedIn:true,
            authReady:true,
            user
          })
      } else {
        setState({
          authReady:true,
          isLoggedIn:false,
          user:null
        })
      }
    });
  },[]);

  
  return(
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const AuthContextConsumer = AuthContext.Consumer;