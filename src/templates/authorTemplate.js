import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({data}) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
    <Layout>
        <SEO title={frontmatter.authorName} />

        <h1>{frontmatter.name}</h1>
        <div>Born: {frontmatter.birth}</div>
        <div>Died: {frontmatter.death}</div>
        <div 
            dangerouslySetInnerHTML={{ __html: html }}
        />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        authorName
        birth
        death
      }
    }
  }
`