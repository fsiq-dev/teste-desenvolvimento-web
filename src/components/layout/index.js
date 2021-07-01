import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

const Test = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
