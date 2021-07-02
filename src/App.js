// import react so when bundled ejx syntax can be converted into html
// import component to convert function component to class based 
import React, {Component} from 'react'

// import components
import { CardList } from './components/card-list/CardList';

import './App.css';

// create class called App which extends from component
class App extends Component  {

  constructor() {
    super()
    this.state = ({
      users: [],
      search: ''
    })
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=8')
    .then(response => response.json())
    .then(users => this.setState({users: users.results}))
  }

  render() {
    return (
      <div> 
        <CardList users={this.state.users}/>
      </div>
    )
  }
}

// export app component
export default App;
