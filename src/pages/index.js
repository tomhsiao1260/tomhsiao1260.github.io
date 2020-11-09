import React from "react"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./index.module.css"
import SEO from '../components/SEO/SEO'
import FadeIn from "../utils/fade-in";

export default ({ data }) => (
  <Layout>
    <div className={styles.main_h}>
      <SEO banner={data.file.childImageSharp.fluid.src} />
      <div className={styles.content}>
        <FadeIn
          x={{
            start: 70,
            end: 0,
            stiffness: 50,
            damping: 20
          }}
        >
          <h1>About</h1>
        </FadeIn>
        {/* <p>Yao majored in physics during college and studied for a master's degree in electrical engineering at National Taiwan University. In this period, he cooperated with TSMC to research semiconductor related fields, and published his works in AIP Advances as the first author. In addition, his father is an art lover with artistic background who taught him to draw as he was young. Thus, Yao also tries to explore more possibilities of human and machine cooperation in art. 
        </p>
        <p>In addition, the sketch 《Most beautiful equation in math》 has been invited and published in 《Science Monthly》 in Taiwan. In the future, he hopes to use what he has learned to merge the science and technology into art, our society, and daily life.
        </p> */}
        <p>Yao majored in physics during college and studied for a master's degree in electrical engineering at National Taiwan University. His father is an art lover with artistic background who taught him to draw as he was young. Thus, Yao is also interested in presenting beautiful things through technology, especially in the front-end web domain. He also has some basics in the fields related to artificial intelligence.
        </p>
        <p>In addition, the sketch 《Most beautiful equation in math》 has been invited and published in 《Science Monthly》 in Taiwan. Sometimes, he regards front-end technology as a new medium for art and design. In the future, he hopes to use cutting-edge technology in front-end domain to create a better and impressive user experience.
        </p>
      </div>
      <div className={styles.image}>
        <Img fluid={data.file.childImageSharp.fluid}/>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    file(relativePath: {eq: "about.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`