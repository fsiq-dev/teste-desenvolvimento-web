import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// importação dos reducers
import pokemonReducer from './pokemon/pokemon.reducer'
import pokemonMultipeReducer from './pokemon/pokemonMultiple.reducer'

const reducers = combineReducers({
  pokedex: pokemonReducer,
  pokemon: pokemonMultipeReducer
})

// middlewares de redux
const middlewares = [thunk]

// compose junta os middlewares e ferramentas de debug

const compose = composeWithDevTools(applyMiddleware(...middlewares))

// criar a store do redux

const store = createStore(reducers, compose)

export default store
