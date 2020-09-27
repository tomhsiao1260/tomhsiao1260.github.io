/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from 'react'
import { StaticQuery, graphql } from "gatsby"
import styles from "./layout.module.css"
import FadeIn from "../utils/fade-in";

const element = (className) => (
  document.getElementsByClassName(className)[0]
)

class Layout extends Component {
  componentDidMount() {
    window.addEventListener('scroll', function() {  //still unused
      if (this.scrollY > 0) {
        element(styles.main_h).classList.add(styles.sticky);
      } else {
        element(styles.main_h).classList.remove(styles.sticky);
      }
    });

    element(styles.mobile_toggle).addEventListener("click", function() {
      if (element(styles.main_h).classList.contains(styles.open_nav)){
        element(styles.main_h).classList.remove(styles.open_nav);
      }else{
        element(styles.main_h).classList.add(styles.open_nav);
      }
    });
  } 
  render() {
    return (
      <div>
        <header className={styles.main_h}>
          <div className={styles.row}>
            <FadeIn
            x={{
              start: 20,
              end: 0,
              stiffness: 50,
              damping: 20
            }}
            >
              <a href='/' className={styles.logo}>
                {this.props.data.title}
              </a>
            </FadeIn>
            <div className={styles.mobile_toggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <nav>
            <ul>
              <li><a href='/'>About</a></li>
              <li><a href='/art'>Art</a></li>
              <li><a href='/science'>Science</a></li>
            </ul>
          </nav>
        </header>
        <div
          style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          }}
        >
          <br></br><br></br><br></br>
          <main>{this.props.children}</main>
          <footer>
            © {new Date().getFullYear()} Hsiao Yao
          </footer>
        </div>
      </div>
    )
  }
}

export default ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render = {data => 
      <Layout 
        children={children}
        data={data.site.siteMetadata}
      />}
  />
);
