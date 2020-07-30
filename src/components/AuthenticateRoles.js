import React,{ useContext} from 'react';
import { AuthContext } from '../context/auth';
import * as ROLES from './ROLES';
//Este componente es quien muestra lo que contiene dependiendo el rol que tenga en la base de datos

export default function AuthenticateRoles(props) {
  const auth = useContext(AuthContext);
  const { children,isFor } = props;
  console.log(isFor);

   if(auth.user.isAdmin){
     return children;
   }else if (auth.user.isEmpleado && isFor === ROLES.EMPLEADO) {
    return children;
  }

  return <div></div>;
}