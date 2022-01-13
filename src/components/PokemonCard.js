import React from 'react'
import '../styles/PokemonCard.css'

const PokemonCard = (props) => {

  const {id, image, name, type} = props;

  return (
    <div className='container-card'>
      <span>#0{id}</span>
      <img className='image' src={image} alt={name} />
      <h1 className='text'>{name}</h1>
      <p className='text'>{type}</p>
    </div>
  )
}

export default PokemonCard;
