import React, { Component } from 'react'

import { CardList } from './components/card-list/CardList';
import { Search } from './components/search/Search';
import './App.css';

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