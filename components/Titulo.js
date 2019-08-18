import React from 'react';
import Tiempo from './Tiempo'
class Titulo extends React.Component {
    render() {
      return (
        <nav className="#424242 grey darken-3"> 
          <div className="nav-wrapper">
          <div className="row">

              <div className="col s5">
                <font size="7"> {this.props.name}</font>

              </div>
              <div className="col s5">
                <font size="4" color="white"><Tiempo /></font>
              </div>

           </div>
          </div>
          
          
        </nav>
      );
    }
  }


  export default Titulo