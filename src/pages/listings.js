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
      allSanityListings(sort: {fields: [eventDate], order: DESC} ) {
        edges {
          node {
            id
            eventDate
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
  padding-bottom: 2rem;
  @media ${device.mediaMinMedium} {
    padding: 150px 1rem 4rem;
  }
`

const ListingsContent = styled.div` 
  max-width: 100vw;
  width: 100%;
  margin: 0 auto;
  @media ${device.mediaMinMedium} {
    max-width: 65vw;
  }
`

const Listings = styled.ul`
  margin: 0;
  font-size: 0.75rem;
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
          </Listings>
        </ListingsContent>
      </Wrapper>
    </Layout>
  )  
}
export default SecondPage
