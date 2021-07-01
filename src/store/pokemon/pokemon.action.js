/* eslint-disable unused-imports/no-unused-imports */
import TYPES from '../types'
import { getPokemon, getByPokemonService } from '../../service/pokemon.service'

export const getAll = (page) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.POKEMON_LOADING, status: true })
    try {
      const perPage = 250
      const offset = (page * perPage) - perPage
      const result = await getPokemon(perPage, offset)
      dispatch({ type: TYPES.POKEMON_ALL, data: result.data })
    } catch (error) {
      dispatch({
        type: TYPES.POKEMON_ERROR,
      })
    }
  }
}

export const getByPokemon = (pokemon) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.POKEMON_MULTIPLE_LOADING, status: true })
    try {
      console.log(pokemon)
      const result = await getByPokemonService(pokemon)
      dispatch({ type: TYPES.POKEMON_MULTIPLE_ALL, data: result.data, pokemonName: pokemon })
    } catch (error) {
      dispatch({
        type: TYPES.POKEMON_ERROR,
      })
    }
  }
}
