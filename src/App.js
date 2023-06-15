import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav'
// import characters, { Rick } from './data.js';
import { useState } from 'react';
import axios  from 'axios';

function App() {
   const[characters, setCharacters]= useState([])

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose=(id)=>{
      const result=characters.filter((i)=>i.id!==Number(id))
      setCharacters(result);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
