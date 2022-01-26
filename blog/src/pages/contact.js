import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({ data }) => {
    const { name, company, address } = data.site.siteMetadata.contact;
    return (
        <Layout>
        <SEO title="Contact" />
        <h1>Contact Us</h1>
        <p>Please send all inquiries to: </p>
        <div>{company}</div>
        <div>{`C/O ${name}`}</div>
        <div>{address}</div>

        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            
        </div>
        <Link to="/">Home</Link>
        </Layout>
    )
}

export default Contact

export const query = graphql`
  query MyQuery {
  site {
    siteMetadata {
      contact {
        address
        company
        name
      }
    }
  }
}
`