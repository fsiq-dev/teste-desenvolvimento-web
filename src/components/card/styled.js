import styled from 'styled-components'

import { CardBody, Card } from 'reactstrap'

export const StyledCard = styled(Card)`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin: 10px;
width: 250px;
&:hover {
  background-color: aqua;
  cursor: pointer;
}
`
export const StyledCardBody = styled(CardBody)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const CardContainer = styled.div`
min-height: 100;
`
