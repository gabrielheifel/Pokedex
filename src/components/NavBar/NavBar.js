import React, { useState } from 'react';
// import { searchPokemonApi } from '../../services/api'
import useDebounce from '../../services/useDebounce'
import Logo from '../../images/logo.png';
import './styles.css';

const NavBar = ({onSearch}) => {
  const [displayValue, setDisplayValue] = useState('');
  
  const debouncedChange = useDebounce(onSearch, 1000);
  const handleChange = e => {
    setDisplayValue(e.target.value);
    debouncedChange(e.target.value);
    if(setDisplayValue.length===0) {
      onSearch(null)
    }
  }

  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="pokedex" className='navbar-img'/>
        <input 
          type="search"
          className='search' 
          placeholder='Search'
          value={displayValue}
          // onChange={onSearch} 
          onChange={handleChange} 
        />
        {/* <button onClick={onClick}></button> */}

        <div className="generations">
          <button className='button' value={151}>
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