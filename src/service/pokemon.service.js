import http from '../config/http'

const getPokemon = (perPage, offset) => http.get(`/pokemon?limit=${perPage}&offset=${offset}`)
const getByPokemonService = (pokemon) => http.get(`/pokemon/${pokemon}`)

export {
  getPokemon,
  getByPokemonService
}
