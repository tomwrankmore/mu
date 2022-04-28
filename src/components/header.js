import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import Logo from './logo'
import {device} from './styles/mediaQueries'
import {BsInstagram} from 'react-icons/bs'


const StyledHeader = styled.header` 
  /* background-color: #f5f5f561; */
  width: calc(100vw - 2rem);
  margin: 0 1rem;
  position: fixed;
  z-index: 100;
  padding: 1rem 0 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;

  @media ${device.mediaMinMedium} {
    grid-template-columns: 150px 1fr;
    height: auto;
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
    display: flex;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

const NavLink = styled.a`
    padding: 0;
    border-radius: 5px;
    background-color: #fff;
    display: block;
    transition: all 0.1s ease-out;
    text-transform: lowercase;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      text-decoration: underline;
    }
`

const StyledLink = styled(Link)`
    padding: 0;
    border-radius: 5px;
    background-color: #fff;
    display: block;
    transition: all 0.1s ease-out;
    text-transform: lowercase;
    &:hover {
      text-decoration: underline;
    }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
        {/* {siteTitle} */}
        <Logo />
    <Nav>
      <NavList>
        <li>
          <StyledLink to="/listings/" target="_blank">listings</StyledLink>
        </li>
        <li>
          <NavLink href="https://mu.superbexperience.com/reserve/guests" target="_blank" rel="noreferrer">reservations</NavLink>
        </li>
        <li>
          <NavLink href="https://www.instagram.com/mu.ldn/" target="_blank" rel="noreferrer"><BsInstagram/></NavLink>
        </li>
        {/* <li>
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
