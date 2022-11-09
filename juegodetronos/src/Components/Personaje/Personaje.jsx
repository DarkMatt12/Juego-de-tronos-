import { Link} from "react-router-dom";


import React from 'react'

const Personaje = ({character}) => {
  return (
    
            
            
             <div className='Personaje-Tarjeta'><Link className='Personaje-img' to={`./${character.name}`}>
                <img className='Personaje-img' src={character.image} alt="" /> </Link>
                <h1 className="h1-prueba">{character.name}</h1>
            </div>
             
       
           
            

        
  )
}

export default Personaje