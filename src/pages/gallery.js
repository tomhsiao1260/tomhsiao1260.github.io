import React from "react"

import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <h1>Gallery</h1>
    <div className='gallery'>
      {data.images.edges.map(edge => 
          <Img fixed={edge.node.childImageSharp.fixed} />
        )}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    images: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
      edges {
        node {
          childImageSharp {
            fixed (width:200, height:200){
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
