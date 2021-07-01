/* eslint-disable unused-imports/no-unused-imports */
import TYPES from '../types'
import { getPokemon } from '../../service/pokemon.service'

export const getAll = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.POKEMON_LOADING, status: true })
    try {
      const result = await getPokemon()
      dispatch({ type: TYPES.POKEMON_ALL, data: result.data })
    } catch (error) {
      console.log(error)
    }
  }
}
