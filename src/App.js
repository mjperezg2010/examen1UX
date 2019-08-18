import React,{Component} from 'react';
import Titulo from './components/Titulo';
import './App.css';

import Transacciones from './components/Transacciones';
import Informacion from './components/Informacion';



class App extends Component{
  render(){
    return (
      <div className="App">
      <div className="row">
      <Titulo name="Interbanca"/>


      </div>
       

        <div className="row">
          <Informacion col="col s7"/>
          <Transacciones col="col s5" />

          
          
          
          
          
          
          
          
        </div>
        
          
      </div>
    );
  }
}

export default App;
