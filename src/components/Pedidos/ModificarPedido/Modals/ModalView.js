import React,{useState,useEffect} from 'react'
import { Button, Header, Icon, Modal, Form, Table,Message,Container} from 'semantic-ui-react';

const MessageExampleIcon = (fecha) => (
  <Container>
    <Message icon success>
      <Icon name='check'/>
      <Message.Content>
        <Message.Header>Finalizado</Message.Header>
        Este pedido fue entregado el dia {fecha}
      </Message.Content>
    </Message>
  </Container>
)

function ModalView({row}) {
console.log("TCL: ModalView -> row", row)

  const [state,setState] = useState(false);

  const handleOpen = () => {
    setState(true);
  }

  const handleClose = () => {
    setState(false);
  }

  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, [])
  if(!didMount) {
    return null;
  }
  return(
    <Modal 
    open={state}
    onClose={handleClose}
    trigger={
      <Button color="blue" animated onClick={handleOpen} fluid>
        <Button.Content visible>
          <Icon name="eye"/>
        </Button.Content>
        <Button.Content hidden>
          <Icon name="right arrow" />
        </Button.Content>
      </Button>}
    >
    <Modal.Header >
      <Header as="h2" icon textAlign="center">
        <Icon name="clipboard outline" circular/>
          <Header.Content>
            Pedido
          </Header.Content>
      </Header>
          {
            row.finalizado &&
            MessageExampleIcon(row.fecha_entregado)
          }
    </Modal.Header>
    <Modal.Content>
      <Form className='attached fluid segment'>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Responsable'
            type='text'
            value={row.responsable}
          />
          <Form.Input
            fluid
            label='Fecha de creacion'
            placeholder='Sucursal'
            value={row.fecha}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Entregado por'
            type='text'
            value={row.entregadoPor ? row.entregadoPor : '---'}
          />
          <Form.Input
            fluid
            label='Entregado'
            placeholder='Sucursal'
            value={row.fecha_entregado ? row.fecha_entregado : '---'}
          />
        </Form.Group>
        <Form.Input label='Sucursal' placeholder='Sucursal' type='text' value={row.sucursal} />
        <Table unstackable>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>Producto</Table.HeaderCell>
              <Table.HeaderCell>Cantidad</Table.HeaderCell>
              <Table.HeaderCell>Kg's</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              row.listado.map((item,index)=>(
                <Table.Row key={index} textAlign='center'>
                  <Table.Cell>{item.producto}</Table.Cell>
                  <Table.Cell>{item.cantidad}</Table.Cell>
                  <Table.Cell>{item.kilogramos.length > 0 ? item.kilogramos.map((data,index)=>{return (<div key={index}>{data},</div>)}) : '---'}</Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
      </Form>

    </Modal.Content>
    <Modal.Actions >
      <Container 
        style={{paddingBottom:'30px'}}>
        <Button size='huge' fluid color='orange' onClick={handleClose}>
          Cerrar <Icon name='close' />
        </Button>
      </Container>
    </Modal.Actions>
  </Modal >
  );
}

export default ModalView;
