import React from 'react'

import { Card } from '../card/Card' 

import './cardList.styles.css'

export const CardList = ({users}) => {
  return (
    <div className='cardList'>
      {users.map(user => {
        return <Card key={user.login.uuid}  user={user} />
      })}
    </div>
  )
}