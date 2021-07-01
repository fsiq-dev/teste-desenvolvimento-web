/* eslint-disable unused-imports/no-unused-imports */
import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../../store/pokemon/pokemon.action'
import { Container, Search, SearchIcon, InputSearch } from './styled'

const Home = () => {
  const dispatch = useDispatch()

  const callPokemon = useCallback(() => {
    dispatch(getAll())
  }, [dispatch])

  useEffect(() => {
    callPokemon()
  }, [callPokemon])

  return (
    <>
      <Container>
        <Search>
          <InputSearch type='text' placeholder='Search...' />
          <SearchIcon />
        </Search>
      </Container>
    </>
  )
}

export default Home
