import React from 'react'
import Logo from '../../images/logo.png';
import './styles.css';

const NavBar = props => {

  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="pokedex" className='navbar-img'/>
        <input 
          type="text"
          className='search' 
          placeholder='Search' 
          onChange={props.search} 
        />
        <div className="generations">
          <button className='button' onClick={props.gen} value={'?limit=151'}>
            KANTO
          </button>
          <button className='button'>Gen 2</button>
          <button className='button'>Gen 3</button>
          <button className='button'>Gen 4</button>
        </div>
      </div>
    </>
  )
}

export default NavBar;