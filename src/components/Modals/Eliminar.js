import React,{useState} from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

function Eliminar({seleccionado}) {
  const [state,setState] = useState(false);

  const handleOpen = () => {
    setState(true);
  }

  const handleClose = () => {
    setState(false);
  }
  return(
      <Modal 
        open={state}
        dimmer={'blurring'}
        trigger={
          <Button color="red" animated="vertical" onClick={handleOpen}>
            <Button.Content visible>
              <Icon name="trash alternate"/>
              </Button.Content>
            <Button.Content hidden>
              <Icon name="right arrow" />
            </Button.Content>
          </Button>
        } basic size='small'>
          <Header icon='trash alternate' content='¿Desea Eliminar este pedido?' />
          <Modal.Content>
            <p>
            Al momento de eliminarlo no se podra realizar ninguna accion sobre este el mismo. Y se eliminara del listado.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted onClick={handleClose}>
              <Icon name='remove' /> No
            </Button>
            <Button color='green' inverted onClick={handleClose}>
              <Icon name='checkmark' /> Si
            </Button>
          </Modal.Actions>
        </Modal>
  );
}

export default Eliminar