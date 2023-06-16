import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function Nav({onSearch}) {
  return (
    <div>
        <SearchBar onSearch={onSearch} /> 
        <button>
          <Link to='/about'>About</Link>
        </button>
        <button>
          <Link to='/'>Home</Link>
        </button>
           
    </div>
  )
}
