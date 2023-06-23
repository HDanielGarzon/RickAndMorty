import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from './Detail.module.css';

export default function Detail() {

    const {id}= useParams();

    const[character, setCharacter]= useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

  return (
    <div className={style.Detail}>
      <div>
        <h2>ID: {character.id}</h2>
        <h2 className={style.name}>{character.name}</h2>
        <h2>Status: {character.status}</h2>
        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {character.origin?.name}</h2>
      </div>
        <img className={style.img} src={character.image} alt='' />
    </div>
  )
}
