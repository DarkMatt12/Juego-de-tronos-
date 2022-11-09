import React from 'react'
import Personaje from '../Personaje/Personaje'

const GaleriaPersonajes = ({characters}) => {
  return (
    <div className="Galeria-Personajes">
        {characters.map((character) => <Personaje key={character.name} character={character}/>)}
    </div>
  )
}

export default GaleriaPersonajes