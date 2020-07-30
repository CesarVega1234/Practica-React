import React from 'react';
import { Button, List , Grid , Popup , Icon , Input , Divider} from 'semantic-ui-react';
import moment from 'moment';
import MyModal from './Modal';
import { connect } from 'react-redux';
import { createOrder } from '../../../redux/actions/order';

function Confirmacion({values,nextStep,prevStep,modificarCantidadListado,createOrder}) {
    var email = `mailto:"${values.email}"`; //Guardo el email 

    const saveAndContinue = async (e) => {

        const data = {
            email:values.email,
            responsable: values.responsable,
            entregadoPor:"",
            fecha:moment(new Date()).format('DD-MM-YYYY'),
            fecha_entregado:"",
            finalizado:false,
            listado:values.listado,
            sucursal:values.sucursal
        }
        await createOrder(data)
        e.preventDefault();
        nextStep();
    }

    const back  = (e) => {
        e.preventDefault();
        prevStep();
    }

    return(
        <div>
            <h1 className="ui centered">Confirme sus detalles</h1>
            <p>Haga clic en Confirmar si los siguientes detalles se han ingresado correctamente</p>
              <Grid celled>
                <Grid.Row>
                <Grid.Column width={16}>
                    <Input 
                        fluid 
                        icon='user'
                        label={{ basic: true, content: 'Responsable' }}
                        size='big'  
                        labelPosition='left'
                        value={values.responsable}
                    />
                    <Input 
                        as="a" 
                        icon='mail'
                        href={email}
                        fluid 
                        label={{ basic: true, content: 'Email' }}
                        labelPosition='left'
                        size='big'  
                        value={values.email}
                    />
                    <Input 
                        fluid 
                        icon='calendar alternate outline'
                        label={{ basic: true, content: 'Fecha' }}
                        labelPosition='left'
                        size='big'  
                        value={moment(new Date()).format('DD-MM-YYYY')}
                    />
                    <Input 
                        fluid 
                        icon="map marker"
                        label={{ basic: true, content: 'Sucursal' }}
                        size='big'  
                        labelPosition='left'
                        value={values.sucursal}
                    />
                </Grid.Column>
                </Grid.Row>

                <Grid.Row >
                <Grid.Column width={16} >

                    {values.listado.map((row, index) => (
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
                            <MyModal
                                modificarCantidad={modificarCantidadListado}
                                row={row}
                            />
                            </Grid.Column>
                        </Grid>
                        <Divider/>
                        </List.Item>
                    </List>
                    ))}
                </Grid.Column>
                </Grid.Row>
            </Grid>
            <Button color="red" animated onClick={back}>
                <Button.Content visible>
                  Volver
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="angle left" />
                </Button.Content>
              </Button>
            <Popup
                trigger={
                    <Button color="orange" animated>
                        <Button.Content visible>
                        Guardar Y Continuar
                        </Button.Content>
                        <Button.Content hidden>
                        <Icon name="angle double up" />
                        </Button.Content>
                    </Button>
                }
                content={ <Button color='green' content='¿Seguro?' onClick={saveAndContinue}/>}
                on='click'
                position='top right'
            />
        </div>
    );
}

const mapStateToProps = () => {
}

const mapDispatchToProps = {
    createOrder,
}

export default connect(mapStateToProps,mapDispatchToProps)(Confirmacion);