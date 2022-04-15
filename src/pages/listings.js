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
import { Wrapper, ListingsContent, Listings, ListingsTitle } from "./listings.styled";

export const query = graphql`
    query SettingsQuery {
      allSanityListings (sort: { fields: [order], order: ASC }) {
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
