import React, { useState } from 'react'
import validation from '../Validation'
import style from './Form.module.css';

export default function Form({login}) {

  const[userData, setUserData]=useState({
    email:'',
    password:''
  })

  const[errors, setErrors]=useState({})

  const handleChange=(event)=>{
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    login(userData)
  }

  return (
    <form onSubmit={handleSubmit} className={style.Form}>
        <label htmlFor="email" className={style.hijo}>Email: </label>
        <input name='email' type="email" placeholder='Ingresa tu email' className={style.hijo} onChange={handleChange} value={userData.email}/>
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="password" className={style.hijo}>Contraseña: </label>
        <input name='password' type="password" placeholder='Ingresa tu contraseña' className={style.hijo} value={userData.password} onChange={handleChange}/>
        {errors.password && <p>{errors.password}</p>}

        <button className={style.hijo}>Submit</button>
    </form>
  )
}
