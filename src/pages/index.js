import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import favicon from '../../static/favicon.png'

export default function Home({
  data: { site, allImageSharp, allMarkdownRemark },
}) {
  const { title, author, description } = site.siteMetadata
  const { edges: posts } = allMarkdownRemark
  const [blogMainImage] = allImageSharp.edges

  return (
    <main style={{ margin: '1rem auto', width: '100%', maxWidth: '700px' }}>
      <Helmet
        htmlAttributes={{ lang: 'th' }}
        title={title}
        meta={[
          { name: 'author', content: author },
          { name: 'description', content: description },
          { name: 'og:title', content: title },
          { name: 'og:description', content: description },
          {
            name: 'og:image',
            content: blogMainImage.node.resize.src,
          },
        ]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />
      <section style={{ width: '82.5%', margin: '0 auto' }}>
        <h3>{title}</h3>
      </section>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
          <article style={{ width: '82.5%', margin: '0 auto' }} key={post.id}>
            <h1>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h1>
            <p style={{ marginBottom: '1.2rem' }}>{post.excerpt}</p>
            <p
              style={{
                float: 'right',
                fontSize: '12px',
                color: 'hsla(0,0%,5%,0.5)',
                margin: '0 2.35rem',
              }}
            >
              {post.frontmatter.date}
            </p>
          </article>
        ))}
    </main>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
    allImageSharp(filter: { resize: { originalName: { eq: "me.jpg" } } }) {
      edges {
        node {
          id
          resize {
            src
          }
        }
      }
    }
  }
`
