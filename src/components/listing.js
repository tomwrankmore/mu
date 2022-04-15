import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {device} from '../components/styles/mediaQueries'

const Listing = styled.li` 
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  flex-direction: column;
  margin: 0;
  &:not(:last-child) {
    border-bottom: dotted 1px gray;
  }
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

const Details = styled.div` 
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 0.875rem;
    @media ${device.mediaMinMedium} {
        text-align: left;
        margin-right: 1rem;
        margin-bottom: 0;
  }
`

const Artist = styled.span` 
  font-weight: bold;
  flex: 1;
`

const TicketButton = styled.a` 
    margin: 0.875rem auto;
    display: block;
    border: solid 1px #cfcfcf;
    width: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    font-size: 0.875rem;

    @media ${device.mediaMinMedium} {
        margin: 0.875rem 0 0 0;
    }
`

const ListingItem = ({listingInfo}) => {
    const {eventDate, ticketLink, listing} = listingInfo;
    const [finalDate, setfinalDate] = useState()

    // Check if window is defined (so if in the browser or in node.js).
    const isBrowser = typeof window !== "undefined"

    useEffect(() => {
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const dateObj = new window.Date(eventDate);
      const month = months[dateObj.getMonth()];
      const dateStringAsArray = dateObj.toDateString().split(" ");
      const formattedDate = `${dateStringAsArray[0]} ${dateStringAsArray[2]}, ${month}`;
      setfinalDate(formattedDate)
    }, [isBrowser])

    return (
        <Listing>
            <Details>
                <Artist>{listing}</Artist>
                {ticketLink ? <TicketButton href={ticketLink} target='_blank' rel="noreferrer">Buy ticket</TicketButton> : null}
            </Details>
            <Date>{finalDate}</Date>
        </Listing>
    )
}

export default ListingItem