import React from 'react'
import { Button, Grid, Header, Segment , Icon} from 'semantic-ui-react';
import { signInGoogle } from '../../services/firebase';

function Login() {
  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='orange' textAlign='center'>
          <Icon name="users"/> Ingrese a su cuenta
        </Header>
          <Segment stacked>
              <Button icon="google" content="Iniciar sesion con google" size='huge' fluid color='google plus' onClick={signInGoogle}/>
          </Segment>
      </Grid.Column>
    </Grid>
  );
}

  

export default Login; 