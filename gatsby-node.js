const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allContentfulVuist {
          edges {
            node {
              id: contentful_id
              to
              from
              message {
                message
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.allContentfulVuist.edges.forEach(({ node }) => {
    createPage({
      path: `vuistje/${node.id}`,
      component: path.resolve(`./src/templates/vuistje.js`),
      context: {
        id: node.id,
        from: node.from,
        to: node.to,
        message: node.message.message,
      },
    })
  })
}
