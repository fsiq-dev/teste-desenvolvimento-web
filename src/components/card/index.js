import React from 'react'
import { navigate } from '@reach/router'

import {
  CardImg,
  CardTitle
} from 'reactstrap'

import { StyledCard, StyledCardBody, CardContainer } from './styled'
const PokemonCard = ({ data }) => {
  return (
    <CardContainer>
      <StyledCard onClick={() => navigate(`/pokemon/${data.name}`)}>
        <CardImg top width='100%' src={data?.image} alt='Card image cap' />
        <StyledCardBody>
          <CardTitle tag='h5'>{data.name} <span>#0{data.id}</span></CardTitle>
        </StyledCardBody>
      </StyledCard>
    </CardContainer>
  )
}

export default PokemonCard
