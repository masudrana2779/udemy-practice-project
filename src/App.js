
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      moreNames: [
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
        {
          this.state.moreNames.map(i => <h1>{i.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
