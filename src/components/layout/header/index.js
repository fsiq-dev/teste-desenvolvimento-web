import logo from '../../../assets/pngegg.png'
import { StyledHeader, HeaderContaier, Logo } from './styled'

const Header = () => {
  return (
    <>
      <StyledHeader>
        <HeaderContaier>
          <Logo src={logo} />
        </HeaderContaier>
      </StyledHeader>
    </>
  )
}

export default Header
