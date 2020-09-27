import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./flow-post.module.css"
import Img from "gatsby-image"
import SEO from '../components/SEO/SEO'

export default ({ data }) => {
  const post = data.markdownRemark
  const front = post.frontmatter
  return (
    <Layout>
      <SEO 
        title={front.title}
        desc={front.description}
        banner={front.img1.childImageSharp.fluid.src}
        pathname={post.fields.slug}
        article
        node={post.parent}
      />
      <h1 className={styles.title}>{front.title}</h1>
      <h1 className={styles.description}>{front.description}</h1>
      <div className={styles.container}>
        <Img className={styles.imgTop} fluid={front.img1.childImageSharp.fluid} />
      </div>
      <div className={styles.content}>{front.content1}</div>
      <div className={styles.container}>
        <Img className={styles.imgMid} fluid={front.img2.childImageSharp.fluid} />
        <Img className={styles.imgMid} fluid={front.img3.childImageSharp.fluid} />
      </div>
      <div className={styles.content}>{front.content2}</div>
      <div className={styles.container}>
        <Img className={styles.imgBot} fluid={front.img4.childImageSharp.fluid} />
      </div>
      <div className={styles.content}>{front.content3}</div>
      <div className={styles.equation} dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className={styles.content}>{front.content4}</div>
      <Link style={{ fontSize: `20px` }} to='/science'>>> Back</Link>
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
        content1
        content2
        content3
        content4
        img1 {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img2 {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img3 {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        img4 {
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