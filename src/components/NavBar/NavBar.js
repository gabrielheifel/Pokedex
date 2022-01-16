import React, { useState } from 'react';
import useDebounce from '../../services/useDebounce'
import Logo from '../../images/logo.png';
import './styles.css';

const NavBar = props => {

  const [displayValue, setDisplayValue] = useState();
  const debouncedChange = useDebounce(props.search, 500);

  const handleChange = e => {
    setDisplayValue(e.target.value);
    debouncedChange(e.target.value);
  }
  // console.log(displayValue)

  return (
    <>
      <div className="navbar">
        <img src={Logo} alt="pokedex" className='navbar-img'/>
        <input 
          type="text"
          className='search' 
          placeholder='Search'
          onChange={handleChange} 
        />
        <div className="generations">
          <button className='button' onClick={props.gen} value={151}>
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