import * as React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"

import LandingMasthead from '../components/landing-masthead'

const Section = styled.section`
  padding: 1rem;
`
const Food = styled.div`
/** Food Styles */
`
const Drink = styled.div`
/** Drink Styles */
`
const Contact = styled.div`
/** Contact Styles */
`

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <LandingMasthead />
      {/* <Section>
        <Food>
          <h1>Food</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aliquam repellendus cumque natus perspiciatis quidem praesentium totam vero. Perferendis iusto fugit exercitationem iure nisi facere asperiores error maiores tenetur unde?</p>
        </Food>
      </Section>
      <Section>
        <Drink>
          <h1>Drink</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aliquam repellendus cumque natus perspiciatis quidem praesentium totam vero. Perferendis iusto fugit exercitationem iure nisi facere asperiores error maiores tenetur unde?</p>
        </Drink>
      </Section>
      <Section>
        <Contact>
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aliquam repellendus cumque natus perspiciatis quidem praesentium totam vero. Perferendis iusto fugit exercitationem iure nisi facere asperiores error maiores tenetur unde?</p>
        </Contact>
      </Section> */}
    </Layout>
    )
  }

export default IndexPage
