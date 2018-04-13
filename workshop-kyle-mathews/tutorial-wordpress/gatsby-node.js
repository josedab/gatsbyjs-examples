/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              title
              content
              excerpt
              date
              modified
            }
          }
        }
      }
    `).then(result => {
      console.log("RESULT", result);
      result.data.allWordpressPost.edges.forEach(({ node }) => {
        console.log("Creating page: " + node.slug);
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
};