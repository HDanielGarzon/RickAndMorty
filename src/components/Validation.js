function validation(userData){

  const errors={};

  if(!/\S+@\S+\.\S+/.test(userData.email) || !userData.email || userData.email.length>35){
    errors.email = 'Email inválido'      
  }
  
    
  if(!/.*\d+.*/.test(userData.password)){
    errors.password = 'la contraseña tiene que tener al menos un número.'    
  }
  if(userData.password.length < 6 || userData.password.length > 10 ){
    errors.password = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres.'    
  }
  return errors;
}

export default validation;