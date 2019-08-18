import React from 'react';
import DatTransaccion from './DatTransaccion';
import {transacciones} from '../cuentas.json';


class Transacciones extends React.Component {
    constructor(){
        super();
        this.state={
            transacciones
        };
        this.handleAddTodo = this.handleAddTodo.bind(this);


    }


    handleAddTodo(transacciones) {

        //Añadir a local store
        var datosJson= JSON.stringify(this.state.transacciones);
        localStorage.setItem('datosJson ', datosJson );

        this.setState({
            


          transacciones: [...this.state.transacciones, transacciones]
         
        })

        
    } 

    
    render(){


        const transacciones = this.state.transacciones.map((transacciones, i) => {
            return (
                
                    

                    <div class="card blue-grey darken-1" key={i}>
                        <div class="card-content white-text">
                        <span class="card-title"><h5>{transacciones.title}</h5></span>
                        
                        
                        <div class="card-action">
                            {transacciones.description}
                        </div>
                        </div>
                    </div>
                    
                
            )
          })


         



        return(

            
                <div className={this.props.col}>
                    <DatTransaccion onAddTodo={this.handleAddTodo} ></DatTransaccion>
                    <div class="divider"></div>
                    <div className="card orange darken-1">
                    <span class="card-title">Lista Transacciones</span>
                        {transacciones}
                    </div>
                    
                </div>
            
        );
    }
}

export default Transacciones