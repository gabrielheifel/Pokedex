import React, { useEffect, useState } from 'react'
import CloseBtn from '../../images/close-btn.png';
import '../../styles/stylesColor.css';
import './styles.css';

const Modal = ({showModal, setShowModal, pokemon}) => {

  const {sprites, name, types, id, height, weight, abilities} = pokemon
  const {other} = sprites
  const [typed, setTyped] = useState();

  useEffect(() => {
    setTyped(types[0].type.name)
  },[types])

  return (
    <>
      {showModal ? 
        <div className="background">
          <div className="modal-wrapper">
            <div className = {`modal-img-wrapper ${typed}`}>
              <img 
                src={other['official-artwork'].front_default} 
                alt={name} className="modal-img"
              />
            </div>
            <main className="modal-content">
              <span className='id'>{(id<=99) ? '#0' : '#'}{id}</span>
              <h1 className='name'>{name}</h1>
              <div className="type-content">
                {types.map((type) => {
                  return(
                    <div className='align-text'>
                      <span className='bold'> Type: </span>
                      <p className={type.type.name}>{type.type.name}</p>
                    </div>
                  )
                })}
              </div>
              <div className='left-block'>
                <p className='sm-margin'>
                  <span className='bold'>Height:</span> 
                  {height}
                </p>
                <p className='sm-margin'>
                  <span className='bold'>Weight:</span> 
                  {weight}
                </p>
              </div>
              <div className="left-block mb-zero">
                <span className='sm-margin bold'>Abilities: </span>
                {abilities.map((ability) => {
                  return(
                    <p className='ability sm-margin'>
                      {ability.ability.name}
                    </p>
                  )
                })}
              </div>
              <div className="shiny-wrapper">
                <span className='bold italic'>Shiny Version:</span>
                <img src={sprites.front_shiny} alt={name} className='shiny-img' />
              </div>
            </main>
            <img 
              src={CloseBtn} 
              alt="close button" 
              className="close-modal-btn" 
              onClick={() => setShowModal(!showModal)}
            />
          </div>
        </div> 
        
        
        : null
      }
    </>
  )
}

export default Modal
