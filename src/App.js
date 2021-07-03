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

  // this is a methods within the app class does not need to be declared like named functions
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=8')
      .then(response => response.json())
      .then(users => this.setState({ users: users.results }))
  }

  // needs to be an arrow function or else 'this' key word wont work
  handleChange = (e) => {
    // 'this' referrers to the current component app's state
    return this.setState({ userSearch: e.target.value })
  }

  render() {
    // within render method, functions and variables are declared as normal
    // deconstruct state so don't have to user 'this' all the time
    const { users, userSearch } = this.state
    const filter = users.filter(user => {
      // TODO: this only targets the first name but wont show correct users if last name is searched
      return user.name.first.toLowerCase().includes(userSearch.toLowerCase())
    })


    return (
      <div>
        {/* need to use 'this' keyword for handleChange function or it is undefined */}
        {/* I could be way off but I think 'this' is needed because handleChange is a method in the app class so different scope */}
        < Search handleChange={this.handleChange} />
        {/* 'this' keyword is not used because the function is within scope, it's declared in the render method but I could be wrong about this */}
        <CardList users={filter} />
      </div >
    )
  }
}

// export app component
export default App;
