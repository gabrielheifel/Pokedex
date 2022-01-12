import React, { useState, useEffect } from 'react';
// import api from '../../services/api';
// import PokemonCard from '../../components/PokemonCard/PokemonCard';
const URL = 'https://pokeapi.co/api/v2/pokedex/2/';

const HomePage = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((dataJson) => {
        setPokemons(dataJson.pokemon_entries)
      })
  }, [])

  // useEffect(() => {

  //   fetch(URL)
  //     .then((responseServer) => {
  //       if (responseServer.ok) {
  //         return responseServer.json()
  //       }
  //     })
  //     .then((responseObject) => {
  //       setPokemons(responseObject.pokemon_entries)
  //     })

  // }, []);

  console.log("pokemons");
  console.log(pokemons);

  return (
    <>
      <h1>Personal Pokédex</h1>
      <p>Nome ou id do Pokémon</p>
      {/* <PokemonCard /> */}
    </>
  )
}

export default HomePage;
