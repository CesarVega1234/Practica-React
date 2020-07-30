import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Finalizado extends Component{
    render(){
        return(
            <div>
                <h1 className="ui centered">Pedido creado con exito.</h1>
                <Button as={Link} to={'/pedidos'} color="orange" fluid>Aceptar</Button>
            </div>
        )
    }
}

export default Finalizado;