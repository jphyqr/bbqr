/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.onCreateNode = ({ node }) => {
    console.log(`Node created of type "${node.internal.type}"`)

    if(node.internal.type==="Author"){


     
    }
  }


  exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const { createPage } = actions
    const result = await graphql(`
    query MyQuery {
        allAuthor {
          edges {
            node {
              id
            }
          }
        }
      }
    `)
    console.log(JSON.stringify(result, null, 4))

    result.data.allAuthor.edges.forEach(({ node }) => {
        createPage({
          path: node.id,
          component: path.resolve(`./src/templates/author.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.id,
          },
        })
      })

  }