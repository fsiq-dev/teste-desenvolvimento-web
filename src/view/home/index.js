import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, getByPokemon } from '../../store/pokemon/pokemon.action'
import {
  Main, ContainerSearch, Search, SearchIcon, InputSearch,
  Grid,
} from './styled'
import { navigate } from '@reach/router'

import Card from '../../components/card'

const Home = (props) => {
  const dispatch = useDispatch()

  const pokemons = useSelector(state => state.pokedex.all.results) || []
  const Loading = useSelector(state => state.pokedex.loading)

  const [searchText, setSearchText] = useState('')

  const callPokemon = useCallback((page = 1) => {
    dispatch(getAll(page))
  }, [dispatch])

  useEffect(() => {
    callPokemon()
  }, [callPokemon])

  const getPokemons = () => {
    if (searchText === '') {
      return pokemons
    }
    return pokemons.filter((item) => item.name.includes(searchText))
  }

  useEffect(() => {
    getByPokemon()
  }, [searchText.length, getByPokemon])

  return (
    <>
      <Main>
        <div>
          <ContainerSearch>
            <Search>
              <InputSearch type='text' placeholder='Search...' onChange={event => { setSearchText(event.target.value) }} />
              <SearchIcon onClick={() => navigate(`/pokemon/${searchText}`)} />
            </Search>
          </ContainerSearch>
          <Grid>
            {Loading
              ? <p>Loading...</p>
              : getPokemons().map((item, k) => {
                const data = {
                  name: item.name,
                  id: k + 1,
                  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${k + 1}.png`
                }
                return <Card key={k} data={data} />
              })}
          </Grid>
        </div>
      </Main>
    </>
  )
}

export default Home
