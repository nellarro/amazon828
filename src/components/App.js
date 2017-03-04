import React, { Component } from 'react';
import '../styles/Search.css';
import '../styles/App.css'
import Search from './Search.js'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
      </div>
    )
  }
}

export default App;
