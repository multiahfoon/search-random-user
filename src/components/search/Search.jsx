import React from 'react'

import './search.styles.css'

export const Search = ({handleChange}) => {
  return (
    <input type="search" placeholder='Search user' onChange={handleChange} />
  )
}