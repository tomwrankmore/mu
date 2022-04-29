import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import {device} from '../components/styles/mediaQueries'

import MenuSection from '../components/menu-section'

export const query = graphql`
    query MyQuery {
        allSanitySnacks(sort: {fields: [order], order: ASC}) { edges { node { price item order } } }
        allSanityRaw(sort: {fields: [order], order: ASC}) { edges { node { price item order } } }
        allSanitySides(sort: {fields: [order], order: ASC}) { edges { node { price item order } } }
        allSanityRobataGrill(sort: {fields: [order], order: ASC}) { edges { node { price item order } } }
        allSanityFried(sort: {fields: [order], order: ASC}) { edges { node { price item order } } }
        allSanityDessert(sort: {fields: [order], order: ASC}) { edges { node { price item order } } }
    }
  `

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

const MenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 600px;
    align-content: flex-end;
    margin-bottom: 2rem;
`

const SectionTitle = styled.h1`
    font-size: 1.875rem;
    font-weight: normal;
    margin: 0;
`

const Menu = styled.ul`
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 600px;
`

const MenuPage = (props) => {
    const { data } = props;

    // Check if window is defined (so if in the browser or in node.js).
    // const isBrowser = typeof window !== "undefined"

    return (
        <Layout>
            <Seo title="Menu" />
            <Wrapper>
                <MenuHeader>
                    <SectionTitle>Menu</SectionTitle>
                    <p style={{margin: 0}}>£</p>
                </MenuHeader>
                
                <Menu>
                    <MenuSection title='Snacks' data={data.allSanitySnacks}/>
                    <MenuSection title='Raw'  data={data.allSanityRaw}/>
                    <MenuSection title='Sides'  data={data.allSanitySides}/>
                    <MenuSection title='Robata Grill'  data={data.allSanityRobataGrill}/>
                    <MenuSection title='Fried'  data={data.allSanityFried}/>
                    <MenuSection title='Dessert'  data={data.allSanityDessert}/>
                </Menu>
            </Wrapper>
        </Layout>
    )
}

export default MenuPage