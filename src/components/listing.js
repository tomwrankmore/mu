import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { device } from "../components/styles/mediaQueries"
import { BsLink45Deg } from "react-icons/bs"

const Listing = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
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
  text-transform: lowercase;
  @media ${device.mediaMinMedium} {
    text-align: right;
  }
`

const Details = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 0.25rem;
  align-items: center;
  @media ${device.mediaMinMedium} {
    text-align: left;
    margin-bottom: 0;
    flex-direction: row;
  }
`

const Artist = styled.span`
  /* font-weight: bold; */
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  text-transform: lowercase;
`

const TicketButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-size: 0.875rem;
  text-transform: lowercase;
  font-weight: normal;

  &:hover {
    text-decoration: underline;
  }
`

const ListingItem = ({ listingInfo }) => {
  const { eventDate, ticketLink, artistUrl, listing } = listingInfo
  const [finalDate, setfinalDate] = useState()

  // Check if window is defined (so if in the browser or in node.js).
  const isBrowser = typeof window !== "undefined"

  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const dateObj = new window.Date(eventDate)
    const month = months[dateObj.getMonth()]
    const dateStringAsArray = dateObj.toDateString().split(" ")
    const formattedDate = `${dateStringAsArray[0]} ${dateStringAsArray[2]}, ${month}`
    setfinalDate(formattedDate)
  }, [isBrowser, eventDate])

  return (
    <Listing>
      <Details>
        <Artist>
          {artistUrl ? (
            <a href={artistUrl} target="_blank" rel="noreferrer">
              {listing}
            </a>
          ) : (
            `${listing}`
          )}
        </Artist>
        {ticketLink ? (
          <>
            - &nbsp;
            <TicketButton href={ticketLink} target="_blank" rel="noreferrer">
              Buy ticket{" "}
            </TicketButton>
          </>
        ) : null}
      </Details>
      <Date>{finalDate}</Date>
    </Listing>
  )
}

export default ListingItem
