import logo from '../../../assets/pngegg.png'
import { StyledHeader, HeaderContaier, Logo } from './styled'
import { navigate } from '@reach/router'

const Header = () => {
  return (
    <>
      <StyledHeader>
        <HeaderContaier>
          <Logo src={logo} onClick={() => navigate('/')} />
        </HeaderContaier>
      </StyledHeader>
    </>
  )
}

export default Header
