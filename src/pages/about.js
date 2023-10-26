import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import {device} from '../components/styles/mediaQueries'

import { Paragraph } from "../components/styles/paragraph.styled"

const Wrapper = styled.div`
  padding: 170px 1rem 1rem;
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  flex-direction: column;
  @media ${device.mediaMinMedium} {
    padding: 150px 1rem 4rem;
  }
`

// const MenuHeader = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;
//     max-width: 600px;
//     align-content: flex-end;
//     margin-bottom: 2rem;
// `

const SectionTitle = styled.h1`
    font-size: 1.875rem;
    font-weight: normal;
    margin: 0;
    text-transform: lowercase;
    margin-bottom: 2rem;
`

// const Menu = styled.ul`
//     padding: 0;
//     margin: 0;
//     width: 100%;
//     max-width: 600px;
// `

const AboutSection = styled.section`    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    max-width: 860px;
    align-content: flex-end;
    margin-bottom: 2rem;
    padding: 0 1rem;
`

const AboutPage = (props) => {
    // const { data } = props;

    // Check if window is defined (so if in the browser or in node.js).
    // const isBrowser = typeof window !== "undefined"

    return (
        <Layout>
            <Seo title="About" />
            <Wrapper>
                <AboutSection>
                    <SectionTitle>About</SectionTitle>
                    <Paragraph>“mu” is a bar, restaurant and live music venue from the team behind <a href="https://brilliantcornerslondon.co.uk/" target="_blank" rel="noreferrer">brilliant corners</a>, <a href="http://giant--steps.com/" target="_blank" rel="noreferrer">GIANT STEPS</a> and <a href="https://idle-moments.com/" target="_blank" rel="noreferrer">Idle Moments</a>.</Paragraph>
                    <Paragraph>Alongside classic cocktails and a carefully curated wine list, we serve a Japanese food which is focussed around fireside cooking from a robata grill. We also present live music Wednesday to Sunday. For more details, see our <Link to="/listings">music programme</Link>.</Paragraph>
                </AboutSection>
            </Wrapper>
        </Layout>
    )
}

export default AboutPage