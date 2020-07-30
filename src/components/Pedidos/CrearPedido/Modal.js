import React,{useState} from 'react'
import { Button, Header, Icon, Modal , Input , Grid ,Message, Form} from 'semantic-ui-react'

const MyModal = ({row,modificarCantidad}) =>{

  const [nuevaProducto,setNuevaProducto] = useState({
    producto:row.producto,
    cantidad:''
  });

  const [state,setState] = useState(false);

  const onSubmit = () => {
    modificarCantidad(nuevaProducto);
    setState(false);
  }
  return(
    <>
      <Modal as={Form} open={state} onClose={()=>setState(false)} trigger={<Button  color="blue" onClick={()=>setState(true)} fluid icon="pencil"/>} closeIcon >
        <Header icon='pencil' content='Modificar Producto' />
        <Modal.Content>
        <Message color='yellow'>Solo se edita la cantidad</Message>
        
          <Grid textAlign="center">
            <Grid.Row columns={1} >
              <Grid.Column style={{marginBottom:'25px'}}>
                <Input 
                  fluid 
                  label={{ basic: true, content: 'Producto' }}
                  size='big' 
                  list='languages' 
                  placeholder='Cambiar Producto'
                  value={row.producto} 
                 />
                {/* <datalist  id='languages'>
                {
                  options.map((row,index)=>(
                      <option key={index} value={row.text} />
                  ))
                } 
                </datalist>*/}
              </Grid.Column>
              <Grid.Column style={{marginBottom:'25px'}}>
            <Input
              fluid
              type="number"
              size='big'
              label={{ basic: true, content: 'Cantidad' }}
              labelPosition='left'
              defaultValue={row.cantidad}
              onChange={(e)=>setNuevaProducto({...nuevaProducto,'cantidad':e.target.value})}
            />
              </Grid.Column>
              <Grid.Column>
        
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
      
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={()=>setState(false)}>
            <Icon name='remove'/> Cancelar
          </Button>
          <Button color='green' onClick={onSubmit} disabled={nuevaProducto.cantidad === '' || nuevaProducto.cantidad === 0 ? true : false}>
            <Icon name='checkmark'/> Aceptar
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default MyModal;
