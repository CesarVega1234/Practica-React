import React from "react";
import GuardRoute from './guardRoute'; //Rutas seguras

import Stock from '../Stock';
import Login from '../Login';
import Dashboard from '../Dashboard/Dashboard';
//Componentes de pedidos
import Pedidos from '../Pedidos';
import Formulario from '../Pedidos/CrearPedido/index';
import ModificarPedido from '../Pedidos/ModificarPedido'; //cambiar al index normal
import * as PATH from './PATH';


//Este componente contiene todas las rutas.
//Tambien utiliza "GuardRoute" que es un componente que cumple la funcion de analizar si el usuario inicio sesion o no, en caso de que no lo devuelve al login.

const Routes = () =>{
  return(
    <div>
        <GuardRoute type="private" path={PATH.DASHBOARD} component={Dashboard} />
        <GuardRoute type="private" path={PATH.PEDIDOS} component={Pedidos} />
        <GuardRoute type="private" path={PATH.CREAR_PEDIDO} component={Formulario}/>
        <GuardRoute type="private" path={PATH.MODIFICAR_PEDIDO} component={ModificarPedido}/>
        <GuardRoute type="private" path={PATH.STOCK} component={Stock} />
        <GuardRoute type="public" path={PATH.LOGIN} component={Login} />
    </div>
  );
}

export default Routes;