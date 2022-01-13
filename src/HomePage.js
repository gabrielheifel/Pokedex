import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import NavBar from './components/NavBar/NavBar';
import PokemonCard from './components/PokemonCard/PokemonCard'
import './styles/HomePage.css';
import Arrow from './images/up-arrow.png';

const URL = 'https://pokeapi.co/api/v2/pokemon';

const HomePage = () => {

  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(URL+'?offset=9&limit=9');
  const [showPokemons, setShowPokemons] = useState(URL+'?limit=9')
  const [filter, setFilter] = useState('');

  const getPokemons = async() => {

    // Carrega os Pokemons que serão exibidos
    const res = await fetch(showPokemons)
    const dataJson = await res.json()
    const results = (dataJson.results)

    // setLoadMore(URL+`?offset=${}&limit=9`)
    setShowPokemons(dataJson.next)
    console.log(dataJson)

    // Puxa as informções dos pokemons carregados anteriormente
    const createPokemonCard = results => {
      results.forEach( async (result) => {
        const res = await fetch(URL+`/${result.name}`)
        const dataJson = await res.json();
        
        // seta a lista de pokemons com as info carregadas
        setPokemons( list => [...list, dataJson] )

      })
    } 
    createPokemonCard(results);
  }

  const handleSearchChange = e => {
    setFilter(e.target.value)
  }

  const handleGen = e => {
    setShowPokemons(URL+e.target.value)
    console.log(URL+e.target.value)
    getPokemons()
  }

  useEffect(() => {
    getPokemons()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className='container' id='main-container'>
        <NavBar search={handleSearchChange} gen={handleGen} />
        <ul className='list'>
          {pokemons.map((pokemon, index) => {
            pokemons.sort((a, b) => a.id - b.id)
            return(
              pokemon.name.includes(filter) &&
              <PokemonCard key={index} pokemon={pokemon} />
            )  
          })}
        </ul>
        <Link
          to='load-more' spy={true} smooth={true} offset={-20} duration={500} 
          id='load-more'
          className='load-more' 
          onClick={() => getPokemons()}
        >
          Load More
        </Link>
        <Link 
          className='arrow-content'
          to='main-container' spy={true} smooth={true} offset={-20} duration={500}
        >
          <img src={Arrow} alt="totop" className='arrow-img' />
        </Link>
      </div>
    </>
  )
}

export default HomePage;
