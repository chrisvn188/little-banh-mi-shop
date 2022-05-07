import styled from 'styled-components'

const StyledLogo = styled.img`
  width: 8rem;
  height: auto;
`

const Logo = ({ logo, alt }) => {
  return <StyledLogo src={logo} alt={alt} />
}

export default Logo
