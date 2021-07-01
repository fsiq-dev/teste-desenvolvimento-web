import styled from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi'

export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #fff;
`
// SEARCH BAR
export const ContainerSearch = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
padding: 24px;
`

export const Search = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
@media only screen and (max-width: 978px) {
  width: 70%;
}
`
export const SearchIcon = styled(BiSearchAlt)`
height: 24px;
width: 20px;
position: relative;
right: 35px;
top: 0px;
@media only screen and (max-width: 978px) {
  height: 36px;
  width: 30px;
  right: 30px;
}
`
export const InputSearch = styled.input`
width: 500px;
height: 40px;
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 4px;
padding: 10px;
`

// GRID

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: 978px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`
