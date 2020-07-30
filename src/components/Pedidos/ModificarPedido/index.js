import React, {useState,useEffect} from 'react';
import Layout from '../../Layout';
import { Table, Container,Icon, Message } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getOrderForUser } from '../../../redux/actions/order';
// import moment from 'moment';
import ModalView from './Modals/ModalView';
import PDF from './PDF';
import Loading from '../../Loading';

// function calcularAntiguedad(fecha_creacion_pedido) {
//   //Si la diferencia de dias es mayor a 15 dias, quiere decir que es un pedido antiguo y no es posible modificarlos.
//   let fecha = moment(fecha_creacion_pedido,'DD-MM-YYYY');
//   let fecha_actual = moment('25-01-2020','DD-MM-YYYY');

//   let diferenciaDeDias = fecha_actual.diff(fecha,'days');

//   if (diferenciaDeDias <= 10)
//     return false

//   return true;
// }

const table = (pedidos) => (
  <Table unstackable>
        <Table.Header>
          <Table.Row textAlign='center'>
            <Table.HeaderCell>Fecha</Table.HeaderCell>
            <Table.HeaderCell>Estado</Table.HeaderCell>
            <Table.HeaderCell>Sucursal</Table.HeaderCell>
            <Table.HeaderCell>Opciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
          <Table.Body>
            {
              pedidos.map((row,index)=>(
                <Table.Row key={index} textAlign='center'>
                  <Table.Cell>{row.fecha}</Table.Cell>
                  <Table.Cell>{row.sucursal}</Table.Cell>
                  <Table.Cell>{row.finalizado ? (<Icon circular size='large' name='check' color='green'/>) : <Icon circular size='large'  name='close' color='red'/>}</Table.Cell>

                    <Table.Cell>
                        {/*Boton de ver pedido completo*/}
                        <ModalView row={row}/>

                        {/* <Button
                          color="#FF0000"
                          animated="vertical"
                          disabled={calcularAntiguedad(row.fecha)}
                        >
                          <Button.Content visible>
                            <Icon name="pencil"/>
                          </Button.Content>
                          <Button.Content hidden>
                            <Icon name="right arrow" />
                          </Button.Content>
                        </Button> */}
                        <div style={{marginTop:'5px'}}></div>
                        {
                          row && 
                          <PDF order={row}/>
                        }
                      </Table.Cell>
                  </Table.Row>
              ))}
          </Table.Body>
        </Table>
)

function ModificarPedido(props) {
  const{
    pedidos,
    getOrderForUser
  } = props;
  const [loader, setloader] = useState(false)

  useEffect(() => {
   getOrderForUser() //Si no lo pongo asi, renderizara sus hijos quizas mas de una vez y puede llevar a un error.
   setInterval(() => {
     setloader(true)
   }, 500);
  },[getOrderForUser]);

  return(
    <Layout>
      <Container>
        <Message
            color='orange'
            icon='inbox'
            header='¡Tus pedidos!'
            // content='Historico de todos tus pedidos'
            list={[
              'Historico de todos tus pedidos.',
              'Si son mayores a 10 dias, no se podran ser modificados.',
            ]}
          />
        {
          loader ? table(pedidos) : <Loading/>
        }
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  pedidos: state.pedidos
})

const mapDispatchToProps = {
  getOrderForUser,
}

export default connect(mapStateToProps,mapDispatchToProps)(ModificarPedido);