const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const bookTemplate = path.resolve(`src/templates/bookTemplate.js`)
  const authorTemplate = path.resolve(`src/templates/authorTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              type
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const pageTemplate = (node.frontmatter.type == 'author' ? authorTemplate : bookTemplate)
    
    createPage({
      path: node.frontmatter.path,
      component: pageTemplate,
      context: {}
    })
  })
}