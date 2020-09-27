/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      art: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/art/"}}
      ) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
      science: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/science/"}}
      ) {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.art.edges.forEach(({ node }) => {
    let template = node.frontmatter.template
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/" + template + ".js"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  result.data.science.edges.forEach(({ node }) => {
    let template = node.frontmatter.template
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/" + template + ".js"),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}