/* eslint-disable react/jsx-key */
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getByPokemon } from '../../store/pokemon/pokemon.action'
import { navigate } from '@reach/router'

import { Progress } from 'reactstrap'

import {
  Container, GrandCard, Avatar, InformatioDiv, InfoGroup, InfotTitle, InfoValue, Title,
  Types, TypeContent, TypeValue, Abilities, Status
} from './styled'

import { ContainerSearch, Search, SearchIcon, InputSearch, } from '../../view/home/styled'

const Details = (props) => {
  const { pokemonName } = props
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')

  const callPokemon = useCallback(() => {
    dispatch(getByPokemon(pokemonName))
  }, [dispatch, pokemonName])

  useEffect(() => {
    callPokemon()
  }, [callPokemon])

  const pokemonState = useSelector(state => state.pokemon.data) || []

  return (
    <>
      <Container>
        <ContainerSearch>
          <Search>
            <InputSearch type='text' placeholder='Search...' onChange={event => { setSearchText(event.target.value) }} />
            <SearchIcon onClick={() => navigate(`/pokemon/${searchText}`)} />
          </Search>
        </ContainerSearch>
        <GrandCard>
          <Avatar src={pokemonState.sprites?.front_default} />
          <InformatioDiv>
            <Title>Information</Title>
            <InfoGroup>
              <InfotTitle>Name:</InfotTitle>
              <InfoValue>{pokemonState.name}</InfoValue>
            </InfoGroup>
            <InfoGroup>
              <InfotTitle>Weight:</InfotTitle>
              <InfoValue>{pokemonState.weight}</InfoValue>
            </InfoGroup>
            <InfoGroup>
              <InfotTitle>Height:</InfotTitle>
              <InfoValue>{pokemonState.height}</InfoValue>
            </InfoGroup>
          </InformatioDiv>
          <Types>
            {pokemonState.types?.map((item, k) => {
              return (
                <TypeContent
                  key={k}
                  grass={item.type?.name === 'grass'}
                  poison={item.type?.name === 'poison'}
                  water={item.type?.name === 'water'}
                  fire={item.type?.name === 'fire'}
                  electric={item.type?.name === 'electric'}
                  ground={item.type?.name === 'ground'}
                  fairy={item.type?.name === 'fairy'}
                  normal={item.type?.name === 'normal'}
                  ghost={item.type?.name === 'ghost'}
                  ice={item.type?.name === 'ice'}
                  steel={item.type?.name === 'steel'}
                  rock={item.type?.name === 'rock'}
                  bug={item.type?.name === 'bug'}
                  dark={item.type?.name === 'dark'}
                  fighting={item.type?.name === 'fighting'}
                  flying={item.type?.name === 'flying'}
                  dragon={item.type?.name === 'dargon'}
                  psychic={item.type?.name === 'psychic'}
                >
                  <TypeValue>{item.type?.name}</TypeValue>
                </TypeContent>
              )
            })}
          </Types>
          <Abilities>
            <Title>Abilities</Title>
            {pokemonState.abilities?.map((item, k) => {
              return <span key={k}>M{k + 1} {item.ability?.name}</span>
            })}
          </Abilities>
          <Status>
            <Title>Status</Title>
            <div className='text-center'>HP</div>
            <Progress value={pokemonState.stats[0].base_stat} max='200' />
            <div className='text-center'>attack</div>
            <Progress value={pokemonState.stats[1].base_stat} max='200' />
            <div className='text-center'>defense</div>
            <Progress value={pokemonState.stats[2].base_stat} max='200' />
            <div className='text-center'>special-attack</div>
            <Progress value={pokemonState.stats[3].base_stat} max='200' />
            <div className='text-center'>special-defense</div>
            <Progress value={pokemonState.stats[4].base_stat} max='200' />
            <div className='text-center'>speed</div>
            <Progress value={pokemonState.stats[5].base_stat} max='200' />
          </Status>
        </GrandCard>
      </Container>
    </>
  )
}

export default Details
