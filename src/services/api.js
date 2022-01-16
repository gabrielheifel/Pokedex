export const searchPokemonApi = async (pokemonName) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {}
};

export const getPokemonsApi = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {}
};

export const getPokemonDataApi = async (url, result) => {
  try {
    const res = await fetch(url+`/${result.name}`)
    const data = await res.json();

    return data 
  } catch (err) {}
}

// export const getPokemons = async (offset = 0, limit = 3) => {
//   try {
//     let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
//   } catch (err) {}
// };

// export const getPokemonDataApi = async (url) => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
//   } catch (err) {}
// };
