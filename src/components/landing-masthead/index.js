import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import {getImage} from 'gatsby-plugin-image'
import {BgImage} from 'gbimage-bridge'

const mastHeadStyles = {
    width: '100%', 
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem',
}

const LandingTextBox = styled.div` 
    width: 375px;
    height: 375px;
    background-color: #f5f5f5e6;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    border: solid 2px;

    h1 {
        
    }

    ul {
        margin: 0 0 2rem 0;

        li {
            margin: 0;
            &:not(:last-child) {
                margin: 0 0 0.25rem 0;
            }
            &:last-child {
                margin-top: 2rem;
                padding: 0.5rem 0;
                border-top: 1px solid;
                border-bottom: 1px solid;
            }
        }
    }
    .info {
        small {
            margin: 0;
            display: block;
        }
    }
`
const Logo = styled.h1` 
    position: relative;
    padding-left: 35px;
    font-size: 4rem;
    font-family: Helvetica, Arial, sans-serif;
    margin-top: 2rem;
`
const InvertedQ = styled.span` 
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    left: 0;
`

const LandingMasthead = () => {
    const { backgroundImage123 } = useStaticQuery(
        graphql`
            query {
                backgroundImage123: file(relativePath: {eq: "mu-bg.jpg"}) {
                    childImageSharp {
                    gatsbyImageData(
                        width: 2000, 
                        placeholder: BLURRED,
                        quality: 50, 
                        webpOptions: {quality: 70}
                        )
                    }
                }
            }
        `
    )

    const pluginImage = getImage(backgroundImage123)

    return (
        <BgImage image={pluginImage} style={mastHeadStyles}>
            <LandingTextBox>
                <Logo><InvertedQ>&#8221;</InvertedQ>mu&#8221;</Logo>
                <ul>
                    <li>live music</li>
                    <li>robata grill</li>
                    <li>wine &amp; cocktails </li>
                    <li><b>coming soon</b></li>
                </ul>
                {/* <div className='info'>
                    <small>from the team behind <a href="https://brilliantcornerslondon.co.uk/" target="_blank" rel="noreferrer">brilliant corners</a></small>
                    <a href="https://www.instagram.com/mu.ldn/" target="_blank" rel="noreferrer">@mu.ldn</a>
                </div> */}
            </LandingTextBox>
        </BgImage>
    )
}

export default LandingMasthead