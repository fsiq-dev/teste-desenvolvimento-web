import styled from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi'

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
`

// SEARCH BAR
export const Search = styled.div`
display: flex;

min-width: 500px;
`
export const SearchIcon = styled(BiSearchAlt)`
height: 24px;
width: 20px;
position: relative;
right: 35px;
top: 10px;
`

export const InputSearch = styled.input`
width: 100%;
height: 40px;
border: 1px solid rgba(0, 0, 0, 0.4);
border-radius: 4px;
`