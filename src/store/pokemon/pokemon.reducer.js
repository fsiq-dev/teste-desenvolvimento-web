import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: [],
  errorMsg: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.POKEMON_ALL:
      state.all = action.data
      state.loading = false
      state.errorMsg = ''
      return state
    case TYPES.POKEMON_ERROR:
      state.loading = false
      state.errorMsg = 'unable to get pokemon'
      return state
    default:
      return state
  }
}

export default reducer
