import React, { useState, useEffect } from 'react';
import { searchPokemonApi, getPokemonsApi, getPokemonDataApi } from './services/api';
import NavBar from './components/NavBar/NavBar';
import PokemonCard from './components/PokemonCard/PokemonCard'
import BottomBtns from './components/BottomBtns/BottomBtns';
import './styles/HomePage.css';

const url = 'https://pokeapi.co/api/v2/pokemon';

const HomePage = () => {

  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(9);
  const [loadMore, setLoadMore] = useState(url + `?limit=${limit}`);
  const [filterName, setFilterName] = useState('');
  // const [offset, setOffset] = useState(0);

  useEffect(() => {
    const defaultShowPokemons = async() => {
      const data = await getPokemonsApi(loadMore)
      const results = (data.results)
      setLoadMore(data.next)

      results.forEach(async (result) => {
        const data = await getPokemonDataApi(url, result)
        setPokemons(list => [...list, data])
      })
    }
    defaultShowPokemons()
  }, [])

  const handleSearchChange = async() => {
    const data = await searchPokemonApi(filterName)
    const result = (data.results)
    setPokemons(result)
    console.log("search:", filterName)
  }  

  return (
    <>
      <div className='container' id='main-container'>
        <NavBar
          // filterName={filterName}
          // setFilterName={setFilterName}
          search={() => setFilterName(handleSearchChange)}
        />
        <ul className='list'>
          {pokemons.map((pokemon, index) => {
            pokemons.sort((a, b) => a.id - b.id)
            return (
              // pokemon.name.includes(filterName) &&
              <PokemonCard key={index} pokemon={pokemon} />
            )
          })}
        </ul>
        <BottomBtns 
          setPokemons={setPokemons} 
          loadMore={loadMore}
          setLoadMore={setLoadMore}  
        />
      </div>
    </>
  )
}

export default HomePage;
