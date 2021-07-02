// import react so when bundled ejx syntax can be converted into html
// import component to convert function component to class based 
import React, {Component} from 'react'

import './App.css';

// create class called App which extends from component
class App extends Component  {
  render() {
    return (
      <div>Hello World</div>
    )
  }
}

// export app component
export default App;
