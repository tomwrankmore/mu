import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {device} from '../components/styles/mediaQueries'

const MenuSection = styled.section`

`

const SectionTitle = styled.h2`

`

const MenuSectionUl = styled.ul`

`

const MenuItem = styled.li`

`

const Item = styled.span` 
  @media ${device.mediaMinMedium} {
  }

`

const Price = styled.span` 
  @media ${device.mediaMinMedium} {
  }
`

const MenuPage = (props) => {

    // Check if window is defined (so if in the browser or in node.js).
    const isBrowser = typeof window !== "undefined"

    return (
        // For each menu section
        <MenuSection>
            <SectionTitle></SectionTitle>
            <MenuSectionUl>
                {/* for each menu item */}
                <MenuItem>
                    <Item></Item>
                    <Price></Price>
                </MenuItem>
            </MenuSectionUl>
        </MenuSection>
    )
}

export default MenuPage