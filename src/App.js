import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react';
import axios  from 'axios';
import About  from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App() {

   const location=useLocation();

   const[characters, setCharacters]= useState([])

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

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
         {
            location.pathname !== '/' && <Nav onSearch={onSearch}/>
            
         }
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>  
            <Route path='/detail/:id' element={<Detail/>}/>          
         </Routes>
         
      </div>
   );
}

export default App;
