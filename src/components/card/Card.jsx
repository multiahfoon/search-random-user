import React from 'react'

export const Card = ({user}) => {
  const {name, picture, location, email} = user

  return (
    <div>
      <img src={`${picture.large}`} alt="profile picture" />
      <h1>{`${name.title} ${name.first} ${name.last}`}</h1>
      <p>{`${location.city} ${location.state}`}</p>
      <p>{email}</p>
    </div>
    )
} 