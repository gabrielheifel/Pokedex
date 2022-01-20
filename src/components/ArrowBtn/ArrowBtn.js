import React from 'react'
import { Link } from 'react-scroll';
import Arrow from '../../images/up-arrow.png';
import './styles.css'

const ArrowBtn = () => {
  return (
    <>
      <Link
        className='arrow-content'
        to='main-container' spy={true} smooth={true} offset={-20} duration={500}
      >
        <img src={Arrow} alt="totop" className='arrow-img' />
      </Link>
    </>
  )
}

export default ArrowBtn;
