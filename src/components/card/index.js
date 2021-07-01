import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router'

import {
  CardImg,
  CardTitle
} from 'reactstrap'

import { StyledCard, StyledCardBody, CardContainer } from './styled'

const PokemonCard = ({ data }) => {
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch(data.url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        return setPokemon(data)
      })
  }, [pokemon, data])

  return (
    <CardContainer>
      <StyledCard onClick={() => navigate(`/pokemon/${data.name}`)}>
        <CardImg top width='100%' src={pokemon?.sprites?.front_default} alt='Card image cap' />
        <StyledCardBody>
          <CardTitle tag='h5'>{pokemon?.name} <span>#0{pokemon?.id}</span></CardTitle>
        </StyledCardBody>
      </StyledCard>
    </CardContainer>
  )
}

export default PokemonCard
