import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./one-img.module.css"
import Img from "gatsby-image"
import SEO from '../components/SEO/SEO'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title}
        desc={post.frontmatter.description}
        banner={post.frontmatter.featuredImage.childImageSharp.fluid.src}
        pathname={post.fields.slug}
        article
        node={post.parent}
      />
      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <h1 className={styles.description}>{post.frontmatter.description}</h1>
      <Img className={styles.image} fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link style={{ fontSize: `20px` }} to='/art'>>> Back</Link>
      <br/><br/><br/><br/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
      parent {
        ... on File {
          birthTime(fromNow: false)
          modifiedTime(fromNow: false)
        }
      }
    }
  }
`