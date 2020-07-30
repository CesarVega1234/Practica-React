import React from "react";
import { Container , Grid , Card} from 'semantic-ui-react';
import Layout from '../Layout/index';
import { Link } from 'react-router-dom';
import AuthenticateRoles from '../AuthenticateRoles';
import * as ROLES from '../ROLES';
import * as PATH from '../routes/PATH';

const Pedidos = () =>{
  return(
    <Layout>
      <Container>
          <AuthenticateRoles isFor={ROLES.EMPLEADO}>
              <Grid columns={3} textAlign='center'>
                  <Grid.Column mobile={16} tablet={8} computer={4}>
                    <Card
                      as={Link} 
                      to={PATH.CREAR_PEDIDO}
                      image='https://image.shutterstock.com/image-vector/vector-shopping-cart-add-icon-600w-249972190.jpg'
                      header='Crear Pedido'
                      description='Permite agregar una solicitud de pedidos'
                    />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={8} computer={4}>
                    <Card
                      as={Link} 
                      to={PATH.MODIFICAR_PEDIDO}
                      image='https://as1.ftcdn.net/jpg/02/14/86/46/500_F_214864696_ms4qpx9uMWMe2h4TDgbaiNYpR07Xy8hb.jpg'
                      header='Buscar Pedido'
                      description='Permite buscar o modificar un pedido creado recientemente.'
                    />
                  </Grid.Column>
              </Grid>
          </AuthenticateRoles>
      </Container>
    </Layout>
  );
}

export default Pedidos;