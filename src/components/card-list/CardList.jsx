import React from 'react'

import { Card } from '../card/Card' 

export const CardList = ({users}) => {
  return (
    users.map(user => {
      // TODO: Find something to replace uuid because uuid sometimes returns null so will crash at some time
      // using uuid as a key because response has no id property 
      return <Card key={user.login.uuid}  user={user} />
    })
  )
}