import React from 'react';
import { mapEdgesToNodes } from '../lib/helpers';
import { MenuItem, Item, Price, MenuSectionTitle, StyledMenuSection } from '../components/menu.styled'

const MenuSection = ({ title, data }) => {
    const nodes = data
      ? mapEdgesToNodes(data)
      : [];

      return (
        <StyledMenuSection>
            <MenuSectionTitle>{title}</MenuSectionTitle>
            {nodes.map((item) => (
                <MenuItem key={item.id}>
                    <Item>{item.item}</Item>
                    <Price>{item.price}</Price>
                </MenuItem>
            ))}
        </StyledMenuSection>
      )
}

export default MenuSection;