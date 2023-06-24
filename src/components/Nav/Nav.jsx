import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import style from './Nav.module.css';

export default function Nav({onSearch}) {

  return (
    <div className={style.bar}>

        <button className={style.button} >
          <Link to='/home' className={style.routes}>Home</Link>
        </button>

        <SearchBar onSearch={onSearch} /> 
        
        <button className={style.button}>
          <Link to='/favorites' className={style.routes}>Favorites</Link>
        </button>
        
        <button className={style.button}>
          <Link to='/about' className={style.routes}>About</Link>
        </button>

           
    </div>
  )
}
