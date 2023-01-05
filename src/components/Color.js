import React, {Component} from 'react';

class Color extends Component {
  
  constructor(){
    super(); //trae la lógica de Component
    this.state = { valor: 1, color: 'rojo' }; 
  }

  saludar() {
     alert ("Hola de vuelta para mundo"); 
  }
  
  incrementar = () => { this.setState({ valor: this.state.valor + 1, color: "verde" });  }

  render()
  {
      return (
        <div>
          <p> hola mundo </p>
          <button onClick={this.incrementar}> Boton </button>
          <p>{this.state.valor}</p>   
          <p>{this.state.color}</p>      
          <div onMouseOver={this.saludar}> saludar a mundo </div> 
        </div>
      );
  }
}

export default Color;
