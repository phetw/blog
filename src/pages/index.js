import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'

import './index.css'

import WhoAMI from '../components/WhoAmI'

import favicon from '../../static/favicon.png'

export default function Home({
  data: { site, allImageSharp, allMarkdownRemark },
}) {
  const { title, author, description } = site.siteMetadata
  const ogImage = allImageSharp.edges[0]
  const { edges: posts } = allMarkdownRemark

  return (
    <Fragment>
      <Helmet
        htmlAttributes={{ lang: 'th' }}
        title={title}
        meta={[
          { name: 'author', content: author },
          {
            name: 'description',
            content: description + ' written by ' + author,
          },
          { name: 'og:title', content: title },
          {
            name: 'og:description',
            content: description + ' written by ' + author,
          },
          {
            name: 'og:image',
            content: ogImage.node.resize.src,
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: description,
          },
          {
            name: 'twitter:image',
            content: ogImage.node.resize.src,
          },
        ]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />
      <main className="wrapper">
        <section className="blog-container">
          <WhoAMI />
        </section>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => (
            <section className="blog-container" key={post.id}>
              <h1 className="blog-title">
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </h1>
              <p className="blog-content">{post.frontmatter.description}</p>
              <p className="blog-date">{post.frontmatter.date}</p>
            </section>
          ))}
      </main>
    </Fragment>
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
          id
          excerpt(format: PLAIN)
          frontmatter {
            path
            title
            description
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
    allImageSharp(filter: { resize: { originalName: { eq: "me.jpg" } } }) {
      edges {
        node {
          id
          resize(quality: 40, width: 600, height: 315, toFormat: JPG) {
            src
          }
        }
      }
    }
  }
`
