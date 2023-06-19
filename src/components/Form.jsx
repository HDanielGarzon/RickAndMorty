import React, { useState } from 'react'
import validation from './Validation'

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
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input name='email' type="email" placeholder='Ingresa tu email' onChange={handleChange} value={userData.email}/>
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="password">Contraseña: </label>
        <input name='password' type="password" placeholder='Ingresa tu contraseña' value={userData.password} onChange={handleChange}/>
        {errors.password && <p>{errors.password}</p>}

        <button>Submit</button>
    </form>
  )
}
