
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      moreNames: []
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({moreNames: users}))
  }
  render() {
    return (
      <div className="App">
        {
          this.state.moreNames.map(i => <h1 key={i.id}>{i.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
