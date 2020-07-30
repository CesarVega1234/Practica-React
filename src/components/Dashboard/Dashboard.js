import React,{ useEffect } from 'react';
import Layout from '../Layout';
import { Container,Message,Button} from 'semantic-ui-react';
// import {messagingTheFirebase} from '../../services/firebase/index';
import { askForPermissioToReceiveNotifications,onMessages } from '../../services/firebase';

const logic = (Component) => (props) => {
  useEffect(()=>{
    onMessages();
    return () =>askForPermissioToReceiveNotifications();
  },[])
  return (<Component {...props}/>)
}

function Dashboard(props){
  return(
    <>
      <Layout>
        <Container textAlign='center'>
        <Button color='orange' fluid onClick={askForPermissioToReceiveNotifications}>Recibir notificaciones 1.0</Button>
          <Message 
            size='massive'
            floating 
            content='Esta seccion esta momentaneamente inhabilitada!'
          />
        </Container>
      </Layout>
    </>
  );
}

export default logic(Dashboard);