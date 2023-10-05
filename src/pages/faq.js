import * as React from "react"
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

const SectionTitle = styled.h1`
    font-size: 1.875rem;
    font-weight: normal;
    margin: 0;
    text-transform: lowercase;
    margin-bottom: 2rem;
`

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

const FaqList = styled.ul` 
    margin: 0;

    li {
        margin-bottom: 1.5rem;
    }
`

const Question = styled.span` 
    font-weight: bold;
    display: block;
    margin-bottom: .25rem;
`

const Answer = styled.span` 
    display: block;
`

const Table = styled.table` 
    margin: 1rem 0 3rem 0;
`

const FaqPage = (props) => {

    return (
        <Layout>
            <Seo title="About" />
            <Wrapper>
                <AboutSection>
                    <SectionTitle>FAQ</SectionTitle>
                    <FaqList>
                        <li>
                            <Question>What is mu?</Question>
                            <Answer>It's a bar, restaurant and live music venue.</Answer>
                        </li>
                        <li>
                            <Question>When is the live music?</Question>
                            <Answer>5 days a week. Please check the listings section for details of who is playing when. There are usually two performances, timings are approximately as follows:</Answer>
                        </li>
                    </FaqList>
                    <Table>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Performance 1</th>
                            <th>Performance 2</th>
                        </tr>
                        <tr>
                            <td>Wednesday &amp; Thursday</td>
                            <td>1930 - 2030</td>
                            <td>2100 - 2200</td>
                        </tr>
                        <tr>
                            <td>Friday &amp; Saturday</td>
                            <td>1930 - 2030</td>
                            <td>2130 - 2300</td>
                        </tr>
                        <tr>
                            <td>Sunday</td>
                            <td>1900 - 2000</td>
                            <td>2100 - 2200</td>
                        </tr>
                    </Table>
                    <FaqList>
                        <li>
                            <Question>Is the live music free?</Question>
                            <Answer>There is an optional £8 per person cover charge which is added to the bills of guests who areseated during the performances. The cover charge we collect goes towards the fixed performance fees we pre-agree with each musician that plays.</Answer>
                        </li>
                        <li>
                            <Question>Can I come for dinner even if I don't care about the music?</Question>
                            <Answer>Yes, that's why we make the cover charge optional.</Answer>
                        </li>
                        <li>
                            <Question>Can I talk during the live music performances?</Question>
                            <Answer>Yes you can. We are trying to create an intimate but informal atmosphere. But please however be respectful to other guests and the musicians.</Answer>
                        </li>
                    </FaqList>
                </AboutSection>
            </Wrapper>
        </Layout>
    )
}

export default FaqPage