import React from 'react';
// import useDebounce from '../../services/useDebounce'
import Logo from '../../images/logo.png';
import './styles.css';

const NavBar = ({search}) => {

  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="pokedex" className='navbar-img'/>
        <input 
          type="search"
          className='search' 
          placeholder='Search'
          onChange={search} 
        />
      </div>
    </>
  )
}

export default NavBar;