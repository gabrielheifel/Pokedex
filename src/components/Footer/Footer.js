import React from 'react';
import infoImg from '../../images/information.png'; 
import './styles.css';

const Footer = () => {
  return (
    <>
      <div className='footer-wrapper'>
        <img src={infoImg} alt="information" />
        <h1>Change city to find other Pokémons</h1>
      </div>
    </>
  );
};

export default Footer;
