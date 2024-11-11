import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './Component/Header/Header';

class App extends Component {
  render () {
    return (
      <div className="App">
        
        <Header name="Lukas"/>
      </div>
    );
  }
  
}

export default App;
