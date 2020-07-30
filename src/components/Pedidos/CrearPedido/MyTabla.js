import React,{ useState } from 'react';
import { 
  Segment,
  Grid, 
  Button, 
  Input, 
  Dropdown,
  List,
  Form,
  Divider,
  Icon,
  Message
  } from 'semantic-ui-react';

const options = [
  { key: '1', text: 'Dulce de leche', value: 'Dulce de leche' },
  { key: '2', text: 'Americana', value: 'Americana' },
  { key: '3', text: 'Vainilla', value: 'Vainilla' },
]; //Productos listado completo

//Recorre el arreglo y si existe pongo true y muestro el message.
function existenciaDelProductoEnListado(arr,obj){
  var res = false;
  arr.forEach(element => {
    if(element.producto === obj.producto)
      res = true;
  })

  return res;
}

function MyTable(props) {

  const {
    nextStep,
    prevStep,
    values,
    handleList
  } = props;

  const [list,setList] = useState(values.listado.lenght !== 0 ? values.listado:[]);//Listado del pedido
  const [data,setData] = useState({producto:'',cantidad:'',kilogramos:[]}); //Objeto a agregar a la lista
  const [alertaDeProductoExistente,setAlertaDeProductoExistente] = useState(false); //Estado de Mensaje "Producto existente"

  const agregarProductoAlListado = (data) => {
    var band = existenciaDelProductoEnListado(list,data); //Bandera si encuentra o no el producto en el listado actual.

    //En caso de que exista o no, mostrara el mensaje de alerta o lo ingresara al listado
    if (band) 
      setAlertaDeProductoExistente(true)
    else{
      setList([...list,data]);
      setAlertaDeProductoExistente(false)
    }
  };

  const saveAndContinue = (e) => {
    handleList(list);
    nextStep()
  }

  const back = (e) => {
    e.preventDefault();
    prevStep();
  }

  //Guarda la informacion del Dropdown
  const onChange = (event, result) => {
    const { name, value } = result || event.target;
    setData({ ...data, [name]: value });
  };

  //Paso el indice y lo guardo. Luego ejecuto el useEffect con el metodo splice().
  const eliminarProductoDelListado = (index) => {

    //Copio el arreglo
    var copia = list.slice(0,list.length);

    //Elimino el elemento
    copia.splice(index,1);

    //Guardo cambios
    setList(copia)
  }

  return(
    <Form color='blue' style={{marginTop:'20px'}}>
      <Form.Field>
        <Grid>
          <Grid.Row>
            <Grid.Column>
                <Segment>
                  <Dropdown
                    placeholder='Producto'
                    fluid
                    name="producto"
                    label="User Type"
                    search
                    selection
                    options={options}
                    value={data.producto}
                    onChange={onChange}
                  />
                </Segment>
                <Segment>
                  <Input
                    size='massive'
                    type='number'
                    placeholder='Cantidad'
                    icon='dolly'
                    iconPosition='left'
                    onChange={(e)=>setData({...data,'cantidad':parseInt(e.target.value,10)})}
                  />
                </Segment>
              <Segment>
              <Button
              disabled={data.cantidad === '' || data.producto==='' ? true:false}
              color='teal'
              content='Agregar Producto'
              icon='add'
              labelPosition='left'
              onClick={()=>agregarProductoAlListado(data)} />
              
              {
                (alertaDeProductoExistente) &&
                <Message negative>
                  <Message.Header>Producto registrado</Message.Header>
                  <p>Este producto ya se encuentra en el listado.</p>
                </Message>
              }
              </Segment>

            </Grid.Column>
          </Grid.Row>
          <Divider/>
          <Grid.Row>
            <Grid.Column>
            {
              list.map((row,index)=>(
                <List key={index} verticalAlign='middle'>
                  <List.Item>
                    <Grid columns={3} divided>
                          <Grid.Column>
                            <List.Content as='h4'>{row.producto}</List.Content>
                          </Grid.Column>
                          <Grid.Column >
                            <List.Content as='h4'>{row.cantidad}</List.Content>
                          </Grid.Column>
                          <Grid.Column >
                            <Button 
                            size='large'
                            icon="trash" 
                            color="red" 
                            onClick={()=>eliminarProductoDelListado(row)}/>
                          </Grid.Column>
                    </Grid>
                    <Divider/>
                  </List.Item>
                </List>
              ))
            }
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form.Field>
      <Button color="red" animated onClick={back}>
        <Button.Content visible>
          Volver
        </Button.Content>
        <Button.Content hidden>
          <Icon name="angle left" />
        </Button.Content>
      </Button>

      <Button color="orange" animated onClick={saveAndContinue} disabled={list.length === 0 ? true : false}>
        <Button.Content visible>
          Guardar Y Continuar
        </Button.Content>
        <Button.Content hidden>
          <Icon name="angle right" />
        </Button.Content>
      </Button>
    </Form>
  );
}

export default MyTable;