import React, { createContext,useState, useEffect } from 'react';
import { 
  watchUsers,
  watchUserChanges
}from '../services/firebase/watcher.js';

export const UsuariosContext = createContext();

export  function UsuariosContextProvider(props) {

  const [usuarios,setUsuarios] = useState([]);
  
  useEffect(()=>{
    watchUserChanges((user)=>{//Verifica existencia de usuario
    
        if (user) { //Si el usuario existe y es la primera vez que se accesa

        watchUsers((usuarios)=>{
            setUsuarios(usuarios);
          });
        // watchUsers().then(res=>{
        //     setUsuarios(res);
        // });
        }
    });
  },[]);
  
  return(
    <UsuariosContext.Provider value={usuarios}>
      {props.children}
    </UsuariosContext.Provider>
  );
}

export const UsuariosContextConsumer = UsuariosContext.Consumer;