import styled from "styled-components"
import {device} from '../components/styles/mediaQueries'

export const Wrapper = styled.div`
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

export const ListingsContent = styled.div` 
  max-width: 100vw;
  width: 100%;
  margin: 0 auto;
  @media ${device.mediaMinMedium} {
    max-width: 65vw;
  }
`

export const Listings = styled.ul`
  margin: 0;
`

export const ListingsTitle = styled.h1` 
  text-align: center;
  flex: 1;
  font-size: 1.875rem;
`