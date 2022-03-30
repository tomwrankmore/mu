import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import {getImage} from 'gatsby-plugin-image'
import {BgImage} from 'gbimage-bridge'
import Logo from '../logo'

const mastHeadStyles = {
    width: '100%', 
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const HeroWrapper = styled.div`
    padding: 1rem;
    width: 100vw;
    height: 100vh;
`

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
                border-top: 1px solid #00000030;
                border-bottom: 1px solid #00000030;
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
        <HeroWrapper>
            <BgImage image={pluginImage} style={mastHeadStyles} />
        </HeroWrapper>
    )
}

export default LandingMasthead