import React, {Component} from 'react';

var urlgif = 'https://api.giphy.com/v1/gifs/random?api_key=CwKRJ4ZHZ6QHxtyAjBcjKioPezGuwGkI&tag=&rating=g';

class Nombre extends Component {
  
  constructor(){
    super(); //trae la lógica de Component
    this.state = { valor: 1, color: 'rojo' }; 
  }
  
  incrementar = () => { this.setState({ valor: this.state.valor + 1 });  }

  traerGif(urlgif){
    fetch(urlgif)
    .then(response => response.json() )
    .then(data =>  this.setState( {gif: data.data.image_url} ))
    .catch(e =>console.log(e))
  }


  componentDidMount(){
    alert('termine el renderizado');
    this.traerGif(urlgif)
  }

  componentDidUpdate(prevProps, prevState){
    alert("me actualice");
  }

  componentWillUnmount(prevProps, prevState){
    alert("me destrui");
  }


  render()
  {
      return (
        <div>
          <p> hola mundo </p>
          <button onClick={this.incrementar}> Boton </button>
          <p>{this.state.valor}</p>
          <img src={this.state.gif}></img>
          <button onClick={ () => this.traerGif(urlgif)}> Taer gif</button> 
        </div>
      );
  }
}

export default Nombre;
