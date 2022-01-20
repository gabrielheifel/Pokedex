import React from 'react'
import './styles.css'

const Generation = ({ setLimit, setOffset }) => {
  return (
    <>
     <div className="generations">
        <button 
          className='button' 
          onClick={() => {
            setLimit(151)
            setOffset(0)
          }} 
          >
          KANTO
        </button>
        <button 
          className='button' 
          onClick={() => {
            setLimit(100)
            setOffset(151)
          }} 
          >
          JOHTO
        </button>
        <button 
          className='button' 
          onClick={() => {
            setLimit(135)
            setOffset(251)
          }}
        >
          HOENN
        </button>
        <button 
          className='button' 
          onClick={() => {
            setLimit(108)
            setOffset(386)
          }}
        >
          SINNOH 
        </button>
      </div> 
    </>
  )
}

export default Generation
