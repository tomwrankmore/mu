import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
} from "../lib/helpers";
import Layout from "../components/layout"
import ListingItem from "../components/listing";
import Seo from "../components/seo"
import GraphQLErrorList from "../components/graphql-error-list"
import styled from "styled-components"
import {device} from '../components/styles/mediaQueries'

export const query = graphql`
    query SettingsQuery {
      allSanityListings (sort: { fields: [order], order: ASC }) {
        edges {
          node {
            id
            eventDate
            eventDateText
            ticketLink
            listing
            order
          }
        }
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
  @media ${device.mediaMinMedium} {
    padding: 150px 1rem 1rem;
  }
`

const ListingsContent = styled.div` 
  max-width: 100vw;
  width: 100%;
  margin: 0 auto;
  @media ${device.mediaMinMedium} {
    max-width: 85vw;
  }
`

const Listings = styled.ul`
  margin: 0;
`

const ListingsTitle = styled.h1` 
  text-align: center;
  flex: 1;
  font-size: 1.875rem;
`

const SecondPage = props => {
  const { data, errors } = props;

  const listingsNodes = (data || {}).allSanityListings
  ? mapEdgesToNodes(data.allSanityListings)
  : []

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo title="Listings" />
      <Wrapper>
        <ListingsContent>
          <ListingsTitle>Listings</ListingsTitle>
          <Listings>
            {listingsNodes && (
              listingsNodes.map((listingInfo, idx) => {
                return (
                  <ListingItem 
                    key={idx} 
                    listingInfo={listingInfo} 
                  />
                )
              })
            )}
            {/* <Listing>
                <Artist>Yohan Kebede, Harry Ling &amp; Rio Kai</Artist>
                <Date>Sunday 17th April</Date>          
              </Listing>
            <Listing>
                <Artist>Crispin Ade Egun, Yahael Camara-Onono, Jali Bakary Konte, Aboubacar Konate</Artist>
                <Date>Saturday 16th April</Date>
              </Listing>
            <Listing>
                <Artist>Crispin Ade Egun, Yahael Camara-Onono, Jali Bakary Konte, Aboubacar Konate</Artist>
                <Date>Friday 15th April</Date>
              </Listing>
            <Listing>
                <Artist>Leon Brichard, Idris Rahman &amp; Gene Calderazzo</Artist>
                <Date>Thursday 14th April</Date>
              </Listing>
            <Listing>
                  <Artist>Yohan Kebede</Artist>
                  <Date>Wednesday 13th April</Date>
                </Listing>
            <Listing>
                <Artist>Yohan Kebede, Harry Ling &amp; Rio Kai</Artist>
                <Date>Sunday 10th April</Date>          
              </Listing>
            <Listing>
                <Artist>Tom Herbert &amp; Robert Stillman</Artist>
                <Date>Saturday 9th April</Date>
              </Listing>
            <Listing>
                <Artist> Tom Herbert &amp; Robert Stillman</Artist>
                <Date>Friday 8th April</Date>
              </Listing>
              <Listing>
                <Artist>Leon Brichard, Idris Rahman &amp; Emre Ramazanoglu</Artist>
                <Date>Thursday 7th April</Date>
              </Listing>
              <Listing>
                  <Artist>Ruta Sipola &amp; Menelik Claffey</Artist>
                  <Date>Wednesday 6th April</Date>
              </Listing> */}
          </Listings>
        </ListingsContent>
      </Wrapper>
    </Layout>
  )  
}
export default SecondPage
