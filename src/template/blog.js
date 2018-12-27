import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import ShareToSocial from '../components/ShareToSocial'

const BlogTemplate = ({ data: { site, markdownRemark: post } }) => (
  <main style={{ maxWidth: '800px', margin: '0 auto' }}>
    <Helmet
      htmlAttributes={{ lang: 'th' }}
      title={`${post.frontmatter.title} - ${site.siteMetadata.title}`}
      meta={[
        { name: 'author', content: site.siteMetadata.author },
        {
          name: 'description',
          content: `${post.frontmatter.description} | ${
            post.excerpt
          } written by ${site.siteMetadata.author}`,
        },
        { name: 'og:title', content: post.frontmatter.title },
        {
          name: 'og:description',
          content: `${post.frontmatter.description} written by ${
            site.siteMetadata.author
          }`,
        },
        {
          name: 'og:image',
          content: post.frontmatter.thumbnail.childImageSharp.resize.src,
        },
        {
          name: 'twitter:title',
          content: post.frontmatter.title,
        },
        {
          name: 'twitter:description',
          content: post.frontmatter.description,
        },
        {
          name: 'twitter:image',
          content: post.frontmatter.thumbnail.childImageSharp.resize.src,
        },
      ]}
    />
    <section style={{ margin: '1.25rem 1.75rem' }}>
      <nav style={{ display: 'flex', flexDirection: 'row' }}>
        <Link style={{ fontSize: '1rem' }} to="/">
          Home
        </Link>
      </nav>
      <h1 style={{ margin: '1.35rem 0' }}>{post.frontmatter.title}</h1>
      <p
        style={{
          color: '#c3c3c3',
          marginBottom: '1rem',
          fontSize: '75%',
        }}
      >
        {post.frontmatter.date}
      </p>
      <hr />
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <ShareToSocial
        title={post.frontmatter.title}
        path={post.frontmatter.path}
        siteUrl={site.siteMetadata.siteUrl}
      />
    </section>
  </main>
)

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(format: PLAIN, pruneLength: 300)
      frontmatter {
        path
        title
        description
        date(formatString: "DD MMMM, YYYY")
        thumbnail {
          childImageSharp {
            resize(width: 800, height: 420, cropFocus: CENTER, toFormat: JPG) {
              src
            }
          }
        }
      }
    }
  }
`
