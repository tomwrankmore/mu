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
        food: file(name: {eq: "food_menu"}) {
            id
            publicURL
            name
        }
        bar: file(name: {eq: "bar_food"}) {
            id
            publicURL
            name
        }
        drinks: file(name: {eq: "drinks"}) {
            id
            publicURL
            name
        }
        wine: file(name: {eq: "wine_list"}) {
            id
            publicURL
            name
        }
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
    text-transform: lowercase;
`

const Menu = styled.ul`
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 600px;
    /* background-color: pink; */
    li {
        text-align: center;
        
        padding: 0 0 1rem 0;
        margin: 0 0 1rem 0;
        a {
            padding: 0;
        }
    }
    li:not(:last-child) {
        border-bottom: solid 1px;
    }
`

const MenuUl = styled.ul`
    text-align: center;
    margin: 0;
    li {
        padding: 1rem 0;
        margin: 0;
    }
    li:not(:last-child) {
        border-bottom: solid 1px black;
    }
`

const MenuLink = styled.a`
    font-size: clamp(1rem, 10vw, 2rem); 
    transition: all 0.2s;
    display: block;
    width: 100%;
    &:hover {
        text-decoration: none;
        transform: scale(1.015);
    }
    @media ${device.mediaMinMedium} {
        width: 25vw;
    }
`

const MenuPage = (props) => {
    const { data } = props;

    console.log("data", data.food.publicURL)

    // Check if window is defined (so if in the browser or in node.js).
    // const isBrowser = typeof window !== "undefined"

    return (
        <Layout>
            <Seo title="Menu" />
            <Wrapper>
                {/* <MenuHeader>
                    <SectionTitle>Menu</SectionTitle>
                    <p style={{margin: 0}}>£</p>
                </MenuHeader> */}

                {/* <Menu>
                    {data.allFile.edges.map((file, index) => (
                    <li key={index}>
                        <a href={file.node.publicURL} target="_blank" rel="noreferrer">
                            {file.node.name}
                        </a>
                    </li>
                    ))}
                </Menu> */}

                <MenuUl>
                    <li>
                        <MenuLink href={data.food.publicURL} target="_blank" rel="noreferrer">menu</MenuLink>
                    </li>
                    <li>
                        <MenuLink href={data.bar.publicURL} target="_blank" rel="noreferrer">bar menu</MenuLink>
                    </li>
                    <li>
                        <MenuLink href={data.drinks.publicURL} target="_blank" rel="noreferrer">drinks</MenuLink>
                    </li>
                    <li>
                        <MenuLink href={data.wine.publicURL} target="_blank" rel="noreferrer">wine list</MenuLink>
                    </li>
                </MenuUl>
                
                {/* <Menu>
                    <MenuSection title='Snacks' data={data.allSanitySnacks}/>
                    <MenuSection title='Raw'  data={data.allSanityRaw}/>
                    <MenuSection title='Robata Grill'  data={data.allSanityRobataGrill}/>
                    <MenuSection title='Fried'  data={data.allSanityFried}/>
                    <MenuSection title='Sides'  data={data.allSanitySides}/>
                    <MenuSection title='Dessert'  data={data.allSanityDessert}/>
                </Menu> */}
            </Wrapper>
        </Layout>
    )
}

export default MenuPage