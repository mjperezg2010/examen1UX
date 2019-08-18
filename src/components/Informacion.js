import React from 'react';


class Informacion extends React.Component {
    render(){
        return(

            <div className={this.props.col}>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title"><h4>Informacion</h4></span>
                    <div class="divider"></div>
                    <h5>Esta pagina es una simulacion de depositos a una cuenta <br></br>
                       Cada vez que se hace un depositos se puede ver en pantalla<br></br>
                       y se almacena en localstorage.
                    </h5>
                    
                    </div>
                    
                </div>
            </div>
            


            
        );
    }
}

export default Informacion