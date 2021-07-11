import React, { useState, useEffect } from 'react'

import { CardList } from './components/card-list/CardList';
import { Search } from './components/search/Search';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([])
  const [searchUser, setSearchUser] = useState('')
  const [refresh, setRefresh] = useState(true)

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=8')
      .then(response => response.json())
      .then(userData => setUsers(userData.results))
      .catch(err => console.log(err))
  }, [refresh])

  const handleChange = (e) => {
    setSearchUser(e.target.value)
  }

  const filter = users.filter(user => {
    const { name } = user
    // checks if user state includes the search query string made by user
    return (name.first + ' ' + name.last).toLowerCase().includes(searchUser.toLowerCase())
  })

  const handleClick = () => {
    setRefresh(!refresh)
  }

  return (
    users.length < 1 ?
      null
      : <div className='container'>
        <main>
          <Search handleChange={handleChange} />
          <button onClick={handleClick}>Refresh</button>
          <CardList users={filter} />
        </main>
      </div >
  )
}

export default App;