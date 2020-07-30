import React,{useState} from 'react'
import { 
  Button,
  Header, 
  Icon, 
  Modal,
  Form ,
  List , 
  Grid , 
  Divider} from 'semantic-ui-react'

function Modificar({seleccionado}) {

  const [state,setState] = useState(false);

  console.log(seleccionado);
  
  const handleOpen = () => {
    setState(true);
  }

  const handleClose = () => {
    setState(false);
  }

  return(  
  <Modal 
    open={state}
    trigger={
      <Button color="yellow" animated onClick={handleOpen}>
        <Button.Content visible>
          <Icon name="pencil"/>
        </Button.Content>
        <Button.Content hidden>
          <Icon name="right arrow" />
        </Button.Content>
      </Button>
    }>
      <Header icon='pencil' content='Modificar Pedido' />
      <Modal.Content>
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input label='Sucursal' value={seleccionado.sucursal} />
            <Form.Input label='Fecha' value={seleccionado.fecha} />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label='Responsable' value={seleccionado.responsable} />
            <Form.Input label='Email' value={seleccionado.email} />
          </Form.Group>
        </Form>

        {seleccionado.listado.map((row, index) => (
          <List key={index} verticalAlign="middle" >
              <List.Item>
              <Grid columns={3} divided>
                  <Grid.Column>
                  <List.Content as="h4">{row.producto}</List.Content>
                  </Grid.Column>
                  <Grid.Column>
                  <List.Content as="h4">{row.cantidad}</List.Content>
                  </Grid.Column>
                  <Grid.Column>
                  </Grid.Column>
              </Grid>
              <Divider/>
              </List.Item>
          </List>
        ))}

  
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={handleClose}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={handleClose}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal> 
  );
}

export default Modificar;