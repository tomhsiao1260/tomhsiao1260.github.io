import React from "react"

import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from '../components/SEO/SEO'

export default ({ data }) => {
  return(
    <Layout>
      <SEO title="Artworks by Hsiao Yao" pathname="/art/" />
      {data.art.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.description}</p>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    art: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/art/"}}
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
          excerpt
        }
      }
    }
  }
`

