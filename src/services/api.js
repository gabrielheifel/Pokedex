import axios from "axios";

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokedex/2'
});

export default api;