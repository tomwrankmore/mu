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
    width: 500px;
    height: 500px;
    background-color: #f5f5f5e6;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    border: solid 0.25rem;

    /* &:after {
        content: '';
        display: block;
        padding-bottom: 100%;
    } */

    h1 {
        font-size: 5rem;
        font-family: Helvetica, Arial, sans-serif;
    }

    ul {
        margin: 0 0 2rem 0;

        li {
            margin: 0;
            &:not(:last-child) {
                margin: 0 0 0.25rem 0;
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
                <h1>mu</h1>
                <ul>
                    <li>live music</li>
                    <li>robata grill</li>
                    <li>wine &amp; cocktails </li>
                    <li>coming soon</li>
                </ul>
                <div className='info'>
                    <small>from the team behind <a href="https://brilliantcornerslondon.co.uk/" target="_blank" rel="noreferrer">brilliant corners</a></small>
                    <a href="https://www.instagram.com/mu.ldn/" target="_blank" rel="noreferrer">@mu.ldn</a>
                </div>
            </LandingTextBox>
        </BgImage>
    )
}

export default LandingMasthead