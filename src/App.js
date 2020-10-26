
import React, { Component } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Wow from "./wow";
import { CardList } from "./components/cars-list/card-list.component";
import { SearchBox } from './components/searchBox/searchBox.component';



class App extends Component {
  constructor() {
    super();
    this.state = {
      moreNames: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ moreNames: users }))
  }
  render() {
    const { moreNames, searchField } = this.state;
    const filteredMoreNames = moreNames.filter(moreName =>
      moreName.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h2>This is my first Practice</h2>
        <SearchBox
          placeholder="search by name"
          searchHandelar={searchHandelar => { this.setState({ searchField: searchHandelar.target.value }) }}
        />
        <CardList moreNames={filteredMoreNames} />
      </div>
    );
  }
}

export default App;
