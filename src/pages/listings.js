import * as React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import { mapEdgesToNodes } from "../lib/helpers"
import Layout from "../components/layout"
import ListingItem from "../components/listing"
import Seo from "../components/seo"
import GraphQLErrorList from "../components/graphql-error-list"
import styled from "styled-components"
import { device } from "../components/styles/mediaQueries"
import { Paragraph } from "../components/styles/paragraph.styled"

export const query = graphql`
  query SettingsQuery {
    allSanityListings(sort: { fields: [eventDate], order: DESC }) {
      edges {
        node {
          id
          eventDate
          ticketLink
          artistUrl
          listing
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
    max-width: 860px;
  }
`

const Listings = styled.ul`
  margin: 0;
  font-size: 0.875rem;

  &:first-of-type {
    margin-bottom: 4rem;
  }
`

const ListingsTitle = styled.h1`
  text-align: left;
  font-size: 1.875rem;
  font-weight: normal;
  margin-bottom: 2rem;
  text-transform: lowercase;
  padding-left: 1rem;
`

const ListingsPage = props => {
  const { data, errors } = props

  const listingsNodes = (data || {}).allSanityListings
    ? mapEdgesToNodes(data.allSanityListings)
    : []

  let today = new Date()
  today = today.toISOString().split("T")[0]

  const reversedListings = [...listingsNodes].reverse()

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="Listings" />
      <Wrapper>
        <ListingsContent>
          <ListingsTitle>music</ListingsTitle>
          <Paragraph style={{ padding: "0 1rem" }}>
            We present live music every night performed by a rotation of
            residents and guests. Each night there are two performances, one at
            around 730pm and another at around 9pm. Both performances are
            approximately 45 - 60 mins long. If you book a table you will catch
            at least one of the performances. Booking is recommended but we also
            welcome walk-ins.
          </Paragraph>
          <Listings>
            {reversedListings &&
              reversedListings.map((listingInfo, idx) => {
                if (listingInfo.eventDate >= today) {
                  return (
                    <ListingItem
                      key={idx}
                      today={today}
                      listingInfo={listingInfo}
                    />
                  )
                } else {
                  return null
                }
              })}
          </Listings>
          {/* <ListingsTitle>Past Dates</ListingsTitle>
           <Listings>
            {listingsNodes && (
              listingsNodes.map((listingInfo, idx) => {
                if (listingInfo.eventDate < today) {
                  return (
                    <ListingItem 
                      key={idx} 
                      listingInfo={listingInfo} 
                    />
                  )
                } else {
                  return null
                }
              })
            )}
          </Listings> */}
        </ListingsContent>
      </Wrapper>
    </Layout>
  )
}
export default ListingsPage
