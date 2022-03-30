/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Main = styled.main` 
  position: relative;
  z-index: 10;
  /* margin-bottom: 167px; */
`

const Footer = styled.footer` 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 1rem 1rem;
  font-size: 0.875rem;
  width: 100%;
  bottom: 0px;
  z-index: 1;
  /* text-align: center; */
  align-items: end;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;

    li {
      margin: 0;
    }
  }

  p {
    margin: 0;
    text-align: right;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <Main>{children}</Main>
        <Footer>
            <div></div>
            <div>
              {/* <p>Opening Hours:</p> */}
              <ul>
                <li>Wed: 1700 - 23:30</li>
                <li>Thu: 1700 - 23:30 </li>
                <li>Fri: 1700 - 00:30</li>
                <li>Sat: 1700 - 00:30</li>
                <li>Sunday: 1600 - 23:00</li>
              </ul>
            </div>
            <div>
              <p>432-434 Kingsland Rd, <br/>London <br/>E8 4AA</p>
            </div>
            
          {/* Mu | {new Date().getFullYear()} */}
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
