import React from 'react'
import './searchInput.style.css'
const SearchInput = ({ placeholder, handleChange }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

export default SearchInput
