import React from 'react';
import Layout from '../../Layout';
import MainForm from './MainForm';
import { Container,Segment,Header,Icon} from 'semantic-ui-react';

function Formulario(params) {
  return(
    <>
      <Layout>
        <Container textAlign='center'>
          <Segment textAlign='center' raised>
            <Header as="h2" icon textAlign="center">
              <Icon name="clipboard outline" circular/>
                <Header.Content>
                  Formulario
                </Header.Content>
            </Header>
            <MainForm />
          </Segment>
        </Container>
      </Layout>
    </>
  );
}

export default Formulario;