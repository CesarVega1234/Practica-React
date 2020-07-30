import React, { useEffect } from 'react';
import {Table,Container,Button,Icon,Popup,Divider} from 'semantic-ui-react';
import Layout from '../Layout/index';
import { connect } from 'react-redux';
import { getStock }  from '../../redux/actions/stock';

const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: '2em',
}

function Stock(props) {
  const{
    getStock,
    stock
  } = props;

  useEffect(() => {
    getStock()
  }, [getStock])
  
  return(
  <Layout>
      <Container>
        <Popup
          trigger={<Button icon='eye' />}
          content='Muestra la cantidad de c/u en tiempo real.'
          style={style}
          inverted
        />
        <Divider/>
      <Table celled>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell>codigo</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Cantidad</Table.HeaderCell>
            <Table.HeaderCell>Minimo</Table.HeaderCell>
            <Table.HeaderCell>Opciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            stock.map((row,index)=>(
              <Table.Row key={index} textAlign='center'>
                <Table.Cell>{row.codigo}</Table.Cell>
                <Table.Cell>{row.nombre}</Table.Cell>
                <Table.Cell>{row.cantidad}</Table.Cell>
                <Table.Cell>{row.cantidad_minima}</Table.Cell>
                <Table.Cell>
                  <Button color="yellow" animated>
                    <Button.Content visible>
                      <Icon name="pencil"/>
                    </Button.Content>
                    <Button.Content hidden>
                      <Icon name="right arrow" />
                    </Button.Content>
                  </Button>
                  <Button color="red" animated="vertical">
                    <Button.Content visible>
                      <Icon name="trash"/>
                    </Button.Content>
                    <Button.Content hidden>
                      <Icon name="right arrow" />
                    </Button.Content>
                  </Button>
                  </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
      </Table>
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  getStock,
}

export default connect(mapStateToProps,mapDispatchToProps)(Stock);