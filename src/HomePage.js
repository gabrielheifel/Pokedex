import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { searchPokemonApi, getPokemonsApi, getPokemonDataApi } from './services/api';
import NavBar from './components/NavBar/NavBar';
import PokemonCard from './components/PokemonCard/PokemonCard'
import './styles/HomePage.css';
import Arrow from './images/up-arrow.png';

const url = 'https://pokeapi.co/api/v2/pokemon';

const HomePage = () => {

  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(3);
  const [offset, setOffset] = useState(0);
  const [loadMore, setLoadMore] = useState(url+`?limit=${limit}`);
  const [filterName, setFilterName] = useState('');
  // const [pokemonName, setPokemonName] = useState('');
    
  const handleLoadMore = async() => {
    const data = await getPokemonsApi(loadMore)
    const results = (data.results)

    setLoadMore(data.next)
    
    results.forEach( async (result) => {
      const data = await getPokemonDataApi(url, result)
      setPokemons( list => [...list, data])
    })
  }

  useEffect(() => {
    handleLoadMore()
  }, [])

  const handleSearchChange = async() => {
    // const data = await searchPokemon(filterName)
    // setPokemons(data)
    // console.log("search:", filterName)
  }

  useEffect(() => {
    // getPokemons()
  }, [])

  // useEffect(() => {
  //   const getPokemons = async() => {
  
  //     // Carrega os Pokemons que serão exibidos
  //     const res = await fetch(url+`?offset=${offset}&limit=${limit}`)
  //     const dataJson = await res.json()
  //     const results = (dataJson.results)
  
  //     // setLoadMore(dataJson.next)
      
  //     // Puxa as informções dos pokemons carregados anteriormente
  //     const createPokemonCard = results => {
  //       results.forEach( async (result) => {
  //         const res = await fetch(url+`/${result.name}`)
  //         const dataJson = await res.json();
          
  //         console.log(dataJson)
  //         // seta a lista de pokemons com as info carregadas

  //         //procurar sobre isso, ver se da pra pegar os pokemons pelo id
  //         setPokemons( list => [...list, dataJson])
  //       })
  //     }
  //     createPokemonCard(results)
  //   }
  //   getPokemons()
  // }, [limit, offset])
  
  // const handleLoadMore = () => {
    // setLimit(3);
    // setOffset( offset+limit )
    // console.log("offset", offset, "limit", limit)
  // }
  
  // const handleGen = e => {
  //   setLimit(e.target.value-limit);
  //   setOffset(offset+limit)
  // }


  return (
    <>
      <div className='container' id='main-container'>
        <NavBar 
          // search={() => setFilterName(handleSearchChange)} 
        />
        <ul className='list'>
          {pokemons.map((pokemon, index) => {
            pokemons.sort((a, b) => a.id - b.id)
            return(
              // pokemon.name.includes(filterName) &&
              <PokemonCard key={index} pokemon={pokemon} />
            )  
          })}
        </ul>
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
      </div>
    </>
  )
}

export default HomePage;
