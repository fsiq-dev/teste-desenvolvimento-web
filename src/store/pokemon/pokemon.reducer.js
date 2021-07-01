import TYPES from '../types'

const INITIAL_STATE = {
  loading: false,
  all: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.POKEMON_ALL:
      state.all = action.data
      state.loading = false
      return state
    default:
      return state
  }
}

export default reducer
