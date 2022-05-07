import styled from 'styled-components'
import Logo from '../Logo/Logo'
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  ul {
    display: flex;
    gap: 1rem;
    a {
      padding: 0.5rem 1rem;
      background-color: black;
      color: white;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background-color: #333333e1;
      }
      &.active {
        background-color: orange;
        color: #333333;
      }
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 3rem;
  }
  @media (min-width: 1140px) {
    padding: 1rem 5rem;
  }
`

const Navbar = () => {
  return (
    <StyledNavBar>
      <Link to='/'>
        <Logo logo={logo} />
      </Link>
      <ul>
        <li>
          <NavLink to='/about'>About us</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </StyledNavBar>
  )
}

export default Navbar
