import React from 'react'
import { connect, useDispatch } from 'react-redux'
import Card from '../Card/Card'
import style from './Favorites.module.css';
import { filterCards, orderCards } from '../../redux/action';

function Favorites({myFavorites}) {

    const dispatch = useDispatch()

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }

  return (
    <div>
        <div className={style.titulo}>
        <select onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>

        </div>
        <div className={style.contenedor}>

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
                        onClose={fav.onClose}
                        
                    />
                )
            })
        }
    
        </div>
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