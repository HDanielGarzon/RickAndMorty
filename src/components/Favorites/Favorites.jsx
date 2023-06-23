import React from 'react'
import { connect } from 'react-redux'
import Card from '../Card/Card'
import style from './Favorites.module.css';

function Favorites({myFavorites}) {
  return (
    <div className={style.titulo}>
        {
            myFavorites?.map(fav=>{
                return(
                    <Card 
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        origin={fav.origin.name}
                        image={fav.image}
                    />
                )
            })
        }
    
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);