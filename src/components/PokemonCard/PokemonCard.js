import React, { useEffect, useState } from 'react'
import './styles.css';
import '../../styles/stylesColor.css'

const PokemonCard = ({pokemon}) => {

  const [typed, setTyped] = useState();

  //dont work how need
  useEffect(() => {
    setTyped(pokemon.types[0].type.name)
  },[pokemon.types])

  return (
    <div className = {`container-card card-${typed}`}  >
      <span>{(pokemon.id<=99) ? '#0' : '#'}{pokemon.id}</span>
      <div className="container-img">
        <img className='image' src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h1 className='text'>{pokemon.name}</h1>
      <div className="type-content">
        {pokemon.types.map((type) => {
          return(
            <p className = {type.type.name}>
              {type.type.name}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default PokemonCard;
