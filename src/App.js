
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      moreName: [
        {
          name:'Masud Rana'
        },
        {
          name:'Rana'
        },
        {
          name:'Masud'
        },
        {
          name:'Md. Masud Rana'
        },
        {
          name:'Md. Rana'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.name}
        </p>
          <button onClick={() => this.setState({name: "I  don't Know"})}>Click Here</button>
        </header>
      </div>
    );
  }
}

export default App;
