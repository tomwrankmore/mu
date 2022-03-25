import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import Logo from './logo'
import {device} from './styles/mediaQueries'

const StyledHeader = styled.header` 
  /* background-color: #f5f5f561; */
  width: calc(100vw - 2rem);
  margin: 1rem 1rem 0;
  position: fixed;
  z-index: 100;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.mediaMinMedium} {
    grid-template-columns: 150px 1fr;
  }
`

const Nav = styled.nav` 
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mediaMinMedium} {
    justify-content: flex-end;
  }
`

const NavList = styled.ul` 
  margin: 0;
  padding: 0;
  display: flex;

  li {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

const NavLink = styled.a`
    padding: 0.5rem 0.875rem;
    border-radius: 5px;
    background-color: #fff;
    display: block;
    box-shadow: 0px 0px 10px -1px rgba(0,0,0,1);
    transition: all 0.1s ease-out;
    text-transform: lowercase;
    &:hover {
      text-decoration: none;
      transform: scale(1.025);
    }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
        {/* {siteTitle} */}
        <Logo />
    <Nav>
      <NavList>
        <li>
          <NavLink href="https://mu.superbexperience.com/reserve/guests" target="_blank">reservations</NavLink>
        </li>
        {/* <li>
          Drink
        </li>
        <li>
          Contact
        </li> */}
      </NavList>
    </Nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
