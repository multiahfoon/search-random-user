import React, { useState, useEffect } from 'react'

import { CardList } from './components/card-list/CardList';
import { Search } from './components/search/Search';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([])
  const [searchUser, setSearchUser] = useState('')

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=8')
      .then(response => response.json())
      .then(userData => setUsers(userData.results))
      .catch(err => console.log(err))
  }, [])

  const handleChange = (e) => {
    setSearchUser(e.target.value)
  }

  const filter = users.filter(user => {
    return user.name.first.toLowerCase().includes(searchUser.toLowerCase())
  })

  return (
    <div>
      <Search handleChange={handleChange} />
      <CardList users={filter} />
    </div >
  )
}

export default App;