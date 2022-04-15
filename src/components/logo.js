import * as React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import {device} from './styles/mediaQueries'

const StyledLogo = styled.h1` 
    position: relative;
    padding-left: 26px;
    font-size: 3rem;
    font-family: Helvetica, Arial, sans-serif;
    margin: 0 auto;
    color: black;

    @media ${device.mediaMinMedium} {
        margin: 0;
    }
`
const InvertedQ = styled.span` 
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    left: 0;
`

const Logo = () => {
    const tom = 'tom';

    return (
        <StyledLogo>
            <Link
                to="/"
                style={{
                // color: `white`,
                textDecoration: `none`,
                }}
             >
                <InvertedQ>&#8221;</InvertedQ>mu&#8221;
            </Link>
        </StyledLogo>
    )
}

export default Logo;