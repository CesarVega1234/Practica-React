// PersonalDetails.jsx
import React, { Component } from 'react';
import { Form, Button,Dropdown,Icon } from 'semantic-ui-react';

const options = [
  { key: '1', text: 'Mar de ostende', value: 'Mar de ostende' },
  { key: '2', text: 'Centro', value: 'Centro' },
  { key: '3', text: 'Ostende', value: 'Ostende' },
]; 

class Sucursal extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Ubicacion de entrega</h1>
            <Form.Field>
                <label>Sucursal</label>
                <Dropdown 
                    fluid
                    selection
                    placeholder='Heladeria'
                    onChange={this.props.onChangeDropdown}
                    options={options}
                    value={values.sucursal !== '' ? values.sucursal : ''}
                />
            </Form.Field>
            <Button color="red" animated onClick={this.back}>
                <Button.Content visible>
                  Volver
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="angle left" />
                </Button.Content>
              </Button>

            <Button color="orange" animated onClick={this.saveAndContinue} disabled={values.sucursal === '' ? true : false}>
                <Button.Content visible>
                  Guardar Y Continuar
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="angle right" />
                </Button.Content>
              </Button>
        </Form>
        )
    }
}

export default Sucursal;