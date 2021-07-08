import React from 'react'

import './card.styles.css'

export const Card = ({ user }) => {
  const { name, picture, location, email } = user

  return (
    <div className="card">
      <div>
        <img src={`${picture.large}`} alt="profile picture" />
        <h4>{`${name.title} ${name.first} ${name.last}`}</h4>
        <p>{`${location.city} ${location.state}`}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}