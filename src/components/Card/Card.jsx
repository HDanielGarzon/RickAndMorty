import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import style from './Card.module.css';
import { connect } from 'react-redux';
import { addfav, removeFav } from "../../redux/action";

function Card({id, name, species, origin, image, onClose, addfav, removeFav, myFavorites}) {

   const[isFav, setIsFav]=useState(false)

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }
      else{
         setIsFav(true);
         addfav({id, name, species, origin, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div className={style.Card}>
         
         <button onClick={()=> onClose(id)} className={style.button} >❌</button> 
         {
            isFav ? (
               <button onClick={handleFavorite}className={style.button}>💙</button>
            ) : (
               <button onClick={handleFavorite}className={style.button}>🤍</button>
            )
         }
        
         <h2>{species}</h2>
         <h2>{origin}</h2>
         <img src={image} className={style.img} alt='' /> 
         <Link to={`/detail/${id}`}  className={style.link} >
            <h3>{name}</h3>
         </Link>
      </div>
   );
}

const mapStateToProps =(state)=>{
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps= (dispatch)=>{
   return {
      addfav:(character)=>{ dispatch(addfav(character))},
      removeFav:(id)=> {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);