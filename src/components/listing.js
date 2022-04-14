import React from 'react'
import styled from "styled-components"
import {device} from '../components/styles/mediaQueries'

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

const Date = styled.span` 
  text-align: center;
  flex: 1;
  @media ${device.mediaMinMedium} {
    text-align: right;
  }
`
const Artist = styled.span` 
  text-align: center;
  font-weight: bold;
  flex: 1;

  @media ${device.mediaMinMedium} {
    text-align: left;
    margin-right: 1rem;
  }
`

const ListingItem = ({listingInfo}) => {
    const {eventDateText, ticketLink, listing} = listingInfo;
    console.log('listingInfo:', listingInfo )
    return (
        <Listing>
            <Artist>{listing}</Artist>
            {ticketLink ? <a href={ticketLink} target='_blank' rel="noreferrer">Buy ticket</a> : null}
            <Date>{eventDateText}</Date>
        </Listing>
    )
}

export default ListingItem