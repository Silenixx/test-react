import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './Component/Header/Header';
import Form from './Component/Form';

import user from './user.json';

class App extends Component {
  render () {
    return (
      <div className="App">
        
        <Header {...user} />
        <Form />
      </div>
    );
  }
  
}

export default App;
