import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import {device} from '../components/styles/mediaQueries'

const Wrapper = styled.div`
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ListingsContent = styled.div` 
  max-width: 100vw;
  width: 100%;
  margin: 0 auto;
  @media ${device.mediaMinMedium} {
    max-width: 60vw;
  }
`

const Listings = styled.ul`
  margin: 0;
`

const Listing = styled.li` 
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: solid 1px gray;
  flex-direction: column;
  @media ${device.mediaMinMedium} {
    flex-direction: row;
  }
`

const ListingsTitle = styled.h1` 
  text-align: center;
`

const Date = styled.span` 
  text-align: center;
  @media ${device.mediaMinMedium} {
    text-align: left;
  }
`
const Artist = styled.span` 
  text-align: center;
  font-weight: bold;
  @media ${device.mediaMinMedium} {
    text-align: right;
  }
`

const SecondPage = () => (
  <Layout>
    <Seo title="Listings" />
    <Wrapper>
      <ListingsContent>
        <ListingsTitle>Listings</ListingsTitle>
        <Listings>
          <Listing>
              <Date>Wed 6th April 2022</Date>
              <Artist>Ruta Sipola &amp; Menelik Claffey</Artist>
            </Listing>
          <Listing>
            <Date>Thursday 7th April 2022</Date>
            <Artist> Leon Brichard, Idris Rahman &amp; Emre Ramazanoglu</Artist>
          </Listing>
          <Listing>
            <Date>Friday 8th April 2022</Date>
            <Artist> Tom Herbert &amp; Robert Stillman</Artist>
          </Listing>
          <Listing>
            <Date>Saturday 9th April 2022</Date>
            <Artist>Tom Herbert &amp; Robert Stillman</Artist>
          </Listing>
          <Listing>
            <Date>Sunday 10th April 2022</Date>
            <Artist>Yohan Kebede Trio, w/Harry Ling &amp; Rio Kai</Artist>
          </Listing>
        </Listings>
      </ListingsContent>
    </Wrapper>
  </Layout>
)

export default SecondPage
