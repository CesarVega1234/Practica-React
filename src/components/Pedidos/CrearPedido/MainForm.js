import React, { Component } from 'react';
import Responsable from './Responsable';
import Sucursal from './Sucursal';
import Confirmacion from './Confirmacion';
import Finalizado from './Finalizado';
import { AuthContext } from '../../../context/auth';
import MyStep from './MyStep';
import MyTable from './MyTabla';

class MainForm extends Component {
    state = {
        step: 1,
        responsable:this.context.user.displayName, 
        email: this.context.user.email, 
        sucursal:'',
        listado:[]
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    handleList = (arr) =>{
        this.setState({'listado' : arr })
    }

    modificarCantidadListado = (nuevoObjeto) => {
        var copiaArr = this.state.listado.slice();

        copiaArr.map(row=>{
            if (row.producto === nuevoObjeto.producto) {
                return row.cantidad=nuevoObjeto.cantidad;
            }
            return null;
        });

        this.handleList(copiaArr);
    }

    onChangeDropdown = (event, result) => {
        const { value } = result || event.target;
        this.setState({ ...this.state, 'sucursal': value });
    }

    render(){
        const {step} = this.state;
        const { responsable, email, sucursal,listado } = this.state;
        const values = { responsable, email, sucursal,listado };
        switch(step) {
        case 1:
            return (
                <div>
                    <MyStep posicion={step}/>
                    <Responsable 
                        nextStep={this.nextStep} 
                        handleChange = {this.handleChange}
                        values={values}
                        />
                </div>
            );
        case 2:
            return (
                <div>
                <MyStep posicion={step}/>
                <Sucursal 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    onChangeDropdown = {this.onChangeDropdown}
                    values={values}
                    />
                </div>
            );
        case 3:
            return (
                <div>
                <MyStep posicion={step}/>
                
                <MyTable 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                handleList={this.handleList}
                />
                </div>
            );
        case 4:
            return (
                <div>
                <MyStep posicion={step}/>
                <Confirmacion 
                    modificarCantidadListado={this.modificarCantidadListado}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                </div>
            );
        case 5:
            return <Finalizado />;
        default:
            break;    
        }
        
    }
}

MainForm.contextType = AuthContext;

export default MainForm;