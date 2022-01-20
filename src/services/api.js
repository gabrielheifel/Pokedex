export const getPokemonsApi = async (limit, offset) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}` 
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
