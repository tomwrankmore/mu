import styled from "styled-components"
import {device} from '../components/styles/mediaQueries'

export const Listing = styled.li` 
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

export const Date = styled.span` 
  text-align: center;
  flex: 1;
  @media ${device.mediaMinMedium} {
    text-align: right;
  }
`

export const Details = styled.div` 
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

export const Artist = styled.span` 
  font-weight: bold;
  flex: 1;
`

export const TicketButton = styled.a` 
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