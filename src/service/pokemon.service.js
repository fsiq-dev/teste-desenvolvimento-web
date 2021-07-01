import http from '../config/http'

const getPokemon = () => http.get('/pokemon')

export {
  getPokemon
}
