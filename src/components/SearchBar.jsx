import { useState } from "react";

function SearchBar({onSearch}) {
   const[id, setId]= useState('');

   const handleChange=(event)=>{
      const value = event.target.value;
      setId(value);
      
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
export default SearchBar;
