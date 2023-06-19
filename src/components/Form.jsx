import React, { useState } from 'react'

export default function Form({login}) {

  const[userData, setUserData]=useState({
    email:'',
    password:''
  })

  const[errors, setErrors]=useState({
    email:'',
    password:''
  })

  const handleChange=(event)=>{
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
    validate();
  }

  const validate=()=>{
    if(!/\S+@\S+\.\S+/.test(userData.email) || !userData.email || userData.email.length>35){
        setErrors({
            ...errors,
            email: 'Email inválido'  
        })
    }
    else setErrors({...errors, email: ''})

    if(Array.isArray(userData.password) && userData.password.some((elem) => isNaN(elem))){
      setErrors({
        ...errors,
        password: 'Contraseña inválida'
      })
    }
    else setErrors({...errors, password: ''})
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
