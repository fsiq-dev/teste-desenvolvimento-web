
import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  data: {},
  errorMsg: ''
}

const PokemonMultipleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.POKEMON_MULTIPLE_LOADING:
      state.loading = true
      state.errorMsg = ''
      return state
    case TYPES.POKEMON_MULTIPLE_ALL:
      state.loading = false
      state.errorMsg = ''
      state.data = action.data
      return state
    case TYPES.POKEMON_MULTIPLE_ERROR:
      state.loading = false
      state.errorMsg = 'unable to find pokemon'
      return state
    default:
      return state
  }
}

export default PokemonMultipleReducer
