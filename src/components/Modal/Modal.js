import React, { useEffect, useState } from 'react'
import CloseBtn from '../../images/close-btn.png';
import '../../styles/stylesColor.css';
import './styles.css';

const Modal = ({showModal, setShowModal, pokemon}) => {

  const {sprites, name, types, id, height, weight, stats, abilities} = pokemon
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
                      {/* <span> Type: </span> */}
                      <label> Type: </label>
                      <p className={`type ${type.type.name}`}>{type.type.name}</p>
                    </div>
                  )
                })}
              </div>
              <div className='size'>
                <p className='mg-zero'>
                  <label>Height:</label> 
                  {height}
                </p>
                <p className='mg-zero'>
                  <label>Weight:</label> 
                  {weight}
                </p>
              </div>
              <div className="infos-wrapper">
                <div>
                  <p className='stat'>
                    <label> {stats[0].stat.name}: </label>
                    {stats[0].base_stat}
                  </p>
                  <p className='stat'>
                    <label> {stats[1].stat.name}: </label>
                    {stats[1].base_stat}
                  </p>
                  <p className='stat'>
                    <label> {stats[2].stat.name}: </label>
                    {stats[2].base_stat}
                  </p>
                </div>
                <div>
                  <label>Abilities: </label>
                  <div className='ability'>
                    {abilities.map((ability) => {
                      return(
                        <p className='mg-zero'>
                          {ability.ability.name}
                        </p>
                      )
                    })}

                  </div>
                </div>
              </div>
              <div className="shiny-wrapper">
                <label className='italic'>Shiny Version:</label>
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
