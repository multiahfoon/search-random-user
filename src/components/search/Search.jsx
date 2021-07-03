import React from 'react'

// pass down handleChange function so input can call it
export const Search = ({handleChange}) => {
  return (
    // add onChange event listener to fire handleChange function
    <input type="search" onChange={handleChange} />
  )
}