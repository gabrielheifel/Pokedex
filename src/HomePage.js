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
  // const [offset, setOffset] = useState(0);
  const [loadMore, setLoadMore] = useState(url+`?limit=${limit}`);
  const [loading, setLoading] = useState(true)
  const [searching, setSearching] = useState(false)
  // const [filterName, setFilterName] = useState('');

  
  const onSearch = async(filterName) => {
    if(!filterName){
      showPokemons()
    } else {
      const data = await searchPokemonApi(filterName)
      setPokemons([data])
    }  
  }

  const showPokemons = async() => {
    console.log('useEfect')
    setLoading(true)
    const data = await getPokemonsApi(loadMore)
    const results = (data.results)
    setLoadMore(data.next)

    results.forEach(async (result) => {
      const data = await getPokemonDataApi(url, result)
      setPokemons(list => [...list, data])
    })
    setLoading(false)
  }
    
  useEffect(() => {
    showPokemons()
  }, [])

  return (
    <>
      <div className='container' id='main-container'>
        <NavBar
          // filterName={filterName}
          // onSearch={search => setFilterName(search)}
          onSearch={onSearch}
        />
        {loading ? (
          <p>Carregando pokémons...</p>
        ) : (
          <ul className='list'>
            {pokemons.map((pokemon, index) => {
              pokemons.sort((a, b) => a.id - b.id)
              return (
                // pokemon.name.includes(filterName) &&
                <PokemonCard key={index} pokemon={pokemon} />
              )
            })}
          </ul>
        )}
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
