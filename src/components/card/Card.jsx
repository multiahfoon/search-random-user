import React from 'react'

export const Card = ({user}) => {
  const firstName = user.name.first
  const lastName = user.name.last

  return (
      <h1>{`Welcome ${firstName} ${lastName}`}</h1>
    )
} 