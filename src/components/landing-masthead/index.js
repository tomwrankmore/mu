import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import styled from 'styled-components'
import {getImage} from 'gatsby-plugin-image'
import {BgImage} from 'gbimage-bridge'

const mastHeadStyles = {
    width: '100%', 
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundPosition: '0 70px',
    backgroundAttachment: 'fixed'
}

const HeroWrapper = styled.div`
    padding: 1rem;
    width: 100vw;
    height: 100vh;
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