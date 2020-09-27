import React from "react"

import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"
import SEO from '../components/SEO/SEO'

export default ({ data }) => {
  return(
    <Layout>
      <SEO title="Scientific works by Hsiao Yao" pathname="/science/" />
      {data.science.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.description}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    science: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/science/"}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

