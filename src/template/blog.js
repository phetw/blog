import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

const BlogTemplate = ({ data: { markdownRemark: post } }) => (
  <section>
    <Helmet title={post.frontmatter.title} />
    <div style={{ margin: '1.25rem 2.5rem' }}>
      <Link style={{ fontSize: '1rem' }} to="/">
        Back
      </Link>
      <h1 style={{ marginTop: '2.75rem' }}>{post.frontmatter.title}</h1>
      <p style={{ marginBottom: '1rem' }}>{post.frontmatter.date}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <a
        onClick={() => {
          window.scrollTo(0, 0)
        }}>
        To the top
      </a>
    </div>
  </section>
)

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
