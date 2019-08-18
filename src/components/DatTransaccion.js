import React from 'react';


class DatTransaccion extends React.Component {
    constructor(){
        super();
        this.state={
          
            title: '',
            description: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {

        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
          
          title: '',
          description: ''
        });
        
       

    }
    
    handleInputChange(e) {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
    }


    render(){
        return(
            

            <div className="card-panel teal">
            <form onSubmit={this.handleSubmit}>
              <h5>Transaccion a Realizar</h5>
              <div>
                <input
                  type="text"
                  name="title"
                  className="autocomplete"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  placeholder="Transaccion"
                  />
              </div>
             
              <div>
                <input
                  type="text"
                  name="description"
                  className="autocomplete"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  placeholder="Ingrese una cantidad"
                  />
              </div>
             
              <button type="submit" className="btn waves-effect waves-light">
                Save
              </button>
            </form>
          </div>








        );


    }



}

export default DatTransaccion