import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import PokemonCard from './components/PokemonCard';
import './styles/HomePage.css';
import Logo from './images/logo.png';

const URL = 'https://pokeapi.co/api/v2/pokemon';

const HomePage = () => {

  const [pokemons, setPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(URL+'?limit=9')

  const getPokemons = async() => {

    // Carrega os Pokemons que serão exibidos
    const res = await fetch(loadMore)
    const dataJson = await res.json()
    const results = (dataJson.results)

    setLoadMore(dataJson.next)
    
    // Puxa as informções dos pokemons carregados anteriormente
    const createPokemonCard = results => {
      results.forEach( async (result) => {
        const res = await fetch(URL+`/${result.name}`)
        const dataJson = await res.json();
        
        // seta a lista de pokemons com as info carregadas
        setPokemons( list => [...list, dataJson] )
        
        console.log(dataJson)
      })
    } 
    createPokemonCard(results);
  }

  useEffect(() => {
    getPokemons()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className='container'>
        <div className="navbar">
          <img src={Logo} alt="pokedex" />
          <input type="text" className='search' id="search" />
        </div>
        <ul className='list'>
          {pokemons.map((pokemon, index) => {
            return(            
              <PokemonCard 
                key={index}
                id={pokemon.id}
                image={pokemon.sprites.front_default}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
              />
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
      </div>
    </>
  )
}

export default HomePage;
