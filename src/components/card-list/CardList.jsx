import React from 'react'

import { Card } from '../card/Card' 

export const CardList = ({users}) => {
  return (
    users.map(user => {
      return <Card key={user.login.uuid}  user={user} />
    })
  )
}