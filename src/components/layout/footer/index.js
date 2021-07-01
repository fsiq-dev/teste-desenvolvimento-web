import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: #9D3236;
  color: white;
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>©Desafio-RedFox by:Felipe Siqueira</p>
    </FooterContainer>
  )
}

export default Footer
