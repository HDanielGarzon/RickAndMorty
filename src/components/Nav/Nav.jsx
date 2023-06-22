import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import style from './Nav.module.css';

export default function Nav({onSearch}) {
  return (
    <div className={style.bar}>
        <button className={style.button}>
          <Link to='/home'>Home</Link>
        </button>
        <SearchBar onSearch={onSearch} /> 
        <button className={style.button}>
          <Link to='/about'>About</Link>
        </button>
           
    </div>
  )
}
