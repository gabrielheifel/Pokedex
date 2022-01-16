import React from 'react'
import { Link } from 'react-scroll';
import { getPokemonsApi, getPokemonDataApi } from '../../services/api';
import Arrow from '../../images/up-arrow.png';
import './styles.css'

const url = 'https://pokeapi.co/api/v2/pokemon';

const BottomBtns = props => {

  const {setPokemons, loadMore, setLoadMore} = props;

  const handleLoadMore = async () => {
    const data = await getPokemonsApi(loadMore)
    const results = (data.results)
    setLoadMore(data.next)

    results.forEach(async (result) => {
      const data = await getPokemonDataApi(url, result)
      setPokemons(list => [...list, data])
    })
  }

  return (
    <>
      <Link
        to='load-more' spy={true} smooth={true} offset={-20} duration={500}
        id='load-more'
        className='load-more'
        onClick={() => handleLoadMore()}
      >
        Load More
      </Link>
      <Link
        className='arrow-content'
        to='main-container' spy={true} smooth={true} offset={-20} duration={500}
      >
        <img src={Arrow} alt="totop" className='arrow-img' />
      </Link>
    </>
  )
}

export default BottomBtns;
