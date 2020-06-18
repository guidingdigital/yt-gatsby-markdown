import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookList from "../components/bookList"

const BooksPage = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark (filter: {frontmatter: {type: {eq: "book"}}}) {
          edges {
            node {
              frontmatter {
                path
                title
                thumbnailImage {
                  childImageSharp {
                    fixed(height: 150) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }             
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" />

      <BookList books={allMarkdownRemark.edges} />

    </Layout>
  )
}

export default BooksPage
