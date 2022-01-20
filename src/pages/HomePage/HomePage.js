import React, { useState, useEffect } from 'react';
import { getPokemonsApi, getPokemonDataApi } from '../../services/api';
import NavBar from '../../components/NavBar/NavBar';
import Generation from '../../components/Generations/Generation';
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import ArrowBtn from '../../components/ArrowBtn/ArrowBtn';
import Footer from '../../components/Footer/Footer';
import './styles.css';

const url = 'https://pokeapi.co/api/v2/pokemon';

const HomePage = () => {

  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(151);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true)
  const [filterName, setFilterName] = useState('');
  var count = 0

  const handleSearchChange = e => {
    setFilterName(e.target.value)
  }
  
  useEffect(() => {
    const showPokemons = async() => {
      console.log('useEfect')
      setPokemons([])
      setLoading(true)
      // setCountLoading(0)
      const data = await getPokemonsApi(limit, offset)
      const results = (data.results)
      // setLoadMore(data.next)
  
      results.forEach(async (result) => {
        const data = await getPokemonDataApi(url, result)
        setPokemons(list => [...list, data])
        // setCountLoading(countLoading + 1)
        count = count+1
        // console.log(count)
        if(count===limit-10) {
          setLoading(false)
          // console.log("done")
        }
      })
    }
    showPokemons()
  }, [offset])
  
  return (
    <>
      <div className='container' id='main-container'>
        <NavBar
          search={handleSearchChange} 
          />
        <Generation
          setLimit={setLimit}
          setOffset={setOffset}
        />
        {loading ? (
          <p>Carregando pokémons...</p>
        ) : (
          <ul className='list'>
            {pokemons.map((pokemon, index) => {
              pokemons.sort((a, b) => a.id - b.id)
              return (
                pokemon.name.includes(filterName) &&
                <PokemonCard key={index} pokemon={pokemon} />
              )
            })}
          </ul>
        )}
        <ArrowBtn />
        <Footer />
      </div>
    </>
  )
}

export default HomePage;
