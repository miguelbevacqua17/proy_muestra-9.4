import logo from './logo.svg';
import './App.css';
import Nombre from './components/Nombre';
import Color from './components/Color';
import { Link, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        
      <Link to="/color" exact={true}>  Color  </Link>  
      <Link to="/nombre" exact={true}> Nombre </Link>  

      <Switch>
        <Route path="/color" exact={true} component={Color}>
            
        </Route>
      </Switch>
      </header>


      
    </div>
  );
}

export default App;
