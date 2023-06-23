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
    <div className={style.loginbox}>
      <div >
        <img src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="Logo de Rick and Morty" className={style.img}/>
      </div>
      <h2>Bienvenidos</h2>
      <form onSubmit={handleSubmit} className={style.Form}>
        
        <div className={style.userbox}>
          <label htmlFor="email" className={style.label}></label>
          <input name='email' type="email" placeholder='email: ejemplo@gmail.com' className={style.input} onChange={handleChange} value={userData.email}/>
          {errors.email && <p className={style.alert}>{errors.email}</p>}
        </div>

        <div className={style.userbox}>
          <label htmlFor="password" className={style.label}></label>
          <input name='password' type="password" placeholder='la contraseña es: 123456' className={style.input} value={userData.password} onChange={handleChange}/>
          {errors.password && <p className={style.alert}>{errors.password}</p>}
        </div>

        <button className={style.button}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>

      </form>
    </div>
  )
}
