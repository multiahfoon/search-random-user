// import react so when bundled ejx syntax can be converted into html
// import component to convert function component to class based 
import React, { Component } from 'react'

// import components
import { CardList } from './components/card-list/CardList';
import { Search } from './components/search/Search';
import './App.css';

// create class called App which extends from component
class App extends Component {

  constructor() {
    super()
    this.state = ({
      users: [],
      userSearch: ''
    })
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=8')
      .then(response => response.json())
      .then(users => this.setState({ users: users.results }))
  }

  handleChange = (e) => {
    return this.setState({ userSearch: e.target.value })
  }

  render() {
    const { users, userSearch } = this.state
    const filter = users.filter(user => {
      return user.name.first.toLowerCase().includes(userSearch.toLowerCase())
    })


    return (
      <div>
        < Search handleChange={this.handleChange} />
        <CardList users={filter} />
      </div >
    )
  }
}

export default App;
