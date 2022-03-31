import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import {device} from '../components/styles/mediaQueries'

const Wrapper = styled.div`
  padding: 170px 1rem 1rem;
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mediaMinMedium} {
    padding: 150px 1rem 1rem;
  }
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
  padding: 1.5rem 1rem;
  border-bottom: dotted 1px gray;
  flex-direction: column;
  margin: 0;
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
    text-align: right;
  }
`
const Artist = styled.span` 
  text-align: center;
  font-weight: bold;
  @media ${device.mediaMinMedium} {
    text-align: left;
    margin-right: 1rem;
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
              <Artist>Ruta Sipola &amp; Menelik Claffey</Artist>
              <Date>Wednesday 6th April</Date>
            </Listing>
          <Listing>
            <Artist> Leon Brichard, Idris Rahman &amp; Emre Ramazanoglu</Artist>
            <Date>Thursday 7th April</Date>
          </Listing>
          <Listing>
            <Artist> Tom Herbert &amp; Robert Stillman</Artist>
            <Date>Friday 8th April</Date>
          </Listing>
          <Listing>
            <Artist>Tom Herbert &amp; Robert Stillman</Artist>
            <Date>Saturday 9th April</Date>
          </Listing>
          <Listing>
            <Artist>Yohan Kebede, Harry Ling &amp; Rio Kai</Artist>
            <Date>Sunday 10th April</Date>          
          </Listing>
          <Listing>
              <Artist>Yohan Kebede</Artist>
              <Date>Wednesday 13th April</Date>
            </Listing>
          <Listing>
            <Artist>Leon Brichard, Idris Rahman &amp; Gene Calderazzo</Artist>
            <Date>Thursday 14th April</Date>
          </Listing>
          <Listing>
            <Artist>Crispin Ade Egun, Yahael Camara-Onono, Jali Bakary Konte, Aboubacar Konate</Artist>
            <Date>Friday 15th April</Date>
          </Listing>
          <Listing>
            <Artist>Crispin Ade Egun, Yahael Camara-Onono, Jali Bakary Konte, Aboubacar Konate</Artist>
            <Date>Saturday 16th April</Date>
          </Listing>
          <Listing>
            <Artist>Yohan Kebede, Harry Ling &amp; Rio Kai</Artist>
            <Date>Sunday 17th April</Date>          
          </Listing>
        </Listings>
      </ListingsContent>
    </Wrapper>
  </Layout>
)

export default SecondPage
