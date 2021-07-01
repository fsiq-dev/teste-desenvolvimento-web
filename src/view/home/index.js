/* eslint-disable array-callback-return */
/* eslint-disable unused-imports/no-unused-imports */
import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../../store/pokemon/pokemon.action'
import {
  ContainerSearch, Search, SearchIcon, InputSearch,
  Grid
} from './styled'

const Home = () => {
  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState('')

  const callPokemon = useCallback(() => {
    dispatch(getAll())
  }, [dispatch])

  useEffect(() => {
    callPokemon()
  }, [callPokemon])

  const pokemons = useSelector(state => state.pokedex.all)

  return (
    <>
      <ContainerSearch>
        <Search>
          <InputSearch type='text' placeholder='Search...' onChange={event => { setSearchText(event.target.value) }} />
          <SearchIcon />
        </Search>
      </ContainerSearch>
      <Grid>
        {pokemons?.results?.filter((value) => {
          if (searchText === '') {
            return value
          } else if (value.name.toLowerCase().includes(searchText.toLocaleLowerCase())) {
            return value
          }
        }).map((item, k) => {
          return <h2 key={k}>{item.name}</h2>
        })}
      </Grid>
    </>
  )
}

export default Home
