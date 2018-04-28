import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import WeatherMain from './WeatherMain';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <WeatherMain />
      </div>
    );
  }
}

export default App;
