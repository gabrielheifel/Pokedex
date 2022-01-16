import React, { useEffect, useState } from 'react'
import './styles.css';
import '../../styles/stylesColor.css'
import Modal from '../Modal/Modal';

const PokemonCard = ({pokemon}) => {

  
  const {id, sprites, name, types } = pokemon;
  const [typed, setTyped] = useState();
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => setShowModal(!showModal)

  useEffect(() => {
    setTyped(types[0].type.name)
  },[types])

  return (
    <>
      <div className = {`container-card bg-${typed}`} onClick={openModal} >
        <span>{(id<=99) ? '#0' : '#'}{id}</span>
        <div className="container-img">
          <img className='image' src={sprites.front_default} alt={name} />
        </div>
        <h1 className='text'>{name}</h1>
        <div className="type-content">
          {types.map((type) => {
            return(
              <p className = {type.type.name}>
                {type.type.name}
              </p>
            )
          })}
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} pokemon={pokemon} />
    </>
  )
}

export default PokemonCard;
