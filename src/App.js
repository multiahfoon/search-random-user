// import react so when bundled ejx syntax can be converted into html
// import component to convert function component to class based 
import React, {Component} from 'react'

// import components
import { CardList } from './components/card-list/CardList';
import { Search } from './components/search/Search';
import './App.css';

// create class called App which extends from component
class App extends Component  {

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
    .then(users => this.setState({users: users.results}))
  }

  // needs to be an arrow function or else 'this' key word wont work
  handleChange = (e) => {
    // 'this' referrers to the current component app's state
    return this.setState({userSearch: e.target.value})
  }

  render() {
    return (
      <div>
        {/* need to use 'this' keyword for handleChange function or it is undefined */}
        <Search handleChange={this.handleChange} />
        <CardList users={this.state.users}/>
      </div>
    )
  }
}

// export app component
export default App;
