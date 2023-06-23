import { useState } from "react";
import style from './SearchBar.module.css';

function SearchBar({onSearch}) {
   
   const[id, setId]= useState('');

   const handleChange=(event)=>{
      const value = event.target.value;
      setId(value);
   }

   const randomize = () => {
      for (let i = 0; i < 1; i++) {
       onSearch(Math.floor(Math.random() * 826));
      }
   }


   return (
      <div className={style.SearchBar}>

         <label htmlFor="search">ID: </label>
         <input type='search' onChange={handleChange} value={id} placeholder="Ingrese ID" className={style.input}/>

         <button onClick={()=>{onSearch(id); setId('')}} className={style.button}>Agregar</button>
         <button onClick={randomize} className={style.button}>Random</button>
         
      </div>
   );
}
export default SearchBar;
