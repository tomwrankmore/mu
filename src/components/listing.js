import React from 'react'
import { Listing, Date, Details, Artist, TicketButton } from './listing.styled'

const ListingItem = ({listingInfo}) => {
    const {eventDate, ticketLink, listing} = listingInfo;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObj = new window.Date(eventDate);
    const month = months[dateObj.getMonth()];
    const dateStringAsArray = dateObj.toDateString().split(" ");
    const formattedDate = `${dateStringAsArray[0]} ${dateStringAsArray[2]}, ${month}`;

    return (
        <Listing>
            <Details>
                <Artist>{listing}</Artist>
                {ticketLink ? <TicketButton href={ticketLink} target='_blank' rel="noreferrer">Buy ticket</TicketButton> : null}
            </Details>
            <Date>{formattedDate}</Date>
        </Listing>
    )
}

export default ListingItem