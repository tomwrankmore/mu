import * as React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

import LandingMasthead from '../components/landing-masthead'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <LandingMasthead />
    </Layout>
    )
  }

export default IndexPage
