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
  margin-bottom: 160px;
  background-color: white;
`

const Footer = styled.footer` 
  padding: 1rem;
  font-size: 0.75rem;
  width: 100%;
  bottom: 0px;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  z-index: 9;
  background-color: #ccc;

  ul {
    margin: 0 0 1rem 0;
    padding: 0;

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
          <div>
            <ul>
              <li>Wed/Thu: 1700 - 2330</li>
              <li>Fri/Sat: 1700 - 0030</li>
              <li>Sun: 1600 - 2300</li>
            </ul>
            <p>432-434 Kingsland Rd, London E8 4AA</p>
          </div>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
