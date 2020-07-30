import React, { Component } from 'react';
import {  Button , Icon } from 'semantic-ui-react';
import {Form , Input } from 'semantic-ui-react-form-validator';

class Responsable extends Component{

    saveAndContinue = (e) => {
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form ref="form" onSubmit={()=>this.saveAndContinue()}>
                <h1 className="ui centered">Informacion del empleado</h1>
                    <label>Responsable</label>
                    <Input
                    fluid
                    placeholder='Responsable'
                    onChange={this.props.handleChange('responsable')}
                    value={values.responsable}
                    validators={['required','minStringLength: 6','maxStringLength:30']}
                    errorMessages={['this field is required','Minimo 5 caracteres','Maximo 30 caracteres']} 
                    width={16} 
                    />
                    <label>Email</label>
                    <Input
                    type='email'
                    placeholder='Email'
                    onChange={this.props.handleChange('email')}
                    value={values.email}
                    validators={['required','isEmail']}
                    errorMessages={['this field is required','Email no valido']} 
                    width={16}
                    />
                <Button 
                color="orange" 
                animated 
                disabled={values.email === '' || values.responsable.length <= 5 ? true : false}>
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

export default Responsable;