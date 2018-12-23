import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import WhoAMI from '../components/WhoAmI'

import favicon from '../../static/favicon.png'

const BlogListContainer = styled.main`
  margin: 1rem auto;
  padding-bottom: 3.5rem;
  width: 100%;
  max-width: 800px;
`

const BlogTitleContainer = styled.section`
  width: 72%;
  margin: 0 auto;
`

const BlogItem = styled(BlogTitleContainer)``

const BlogItemTitle = styled.h1``

const BlogItemContentPreview = styled.p`
  color: #616161;
  font-size: 90%;
  max-width: 100%;
  margin-bottom: 1.2rem;
`

const BlogItemPublishDate = styled.p`
  float: right;
  font-size: 12px;
  color: #c3c3c3;
  margin: 0 2.35rem;
`

export default function Home({
  data: { site, allImageSharp, allMarkdownRemark },
}) {
  const { title, author, description } = site.siteMetadata
  const ogImage = allImageSharp.edges[0]
  const { edges: posts } = allMarkdownRemark

  return (
    <BlogListContainer>
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
      <BlogTitleContainer>
        <WhoAMI />
      </BlogTitleContainer>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
          <BlogItem key={post.id}>
            <BlogItemTitle>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </BlogItemTitle>
            <BlogItemContentPreview>
              {post.frontmatter.description}
            </BlogItemContentPreview>
            <BlogItemPublishDate>{post.frontmatter.date}</BlogItemPublishDate>
          </BlogItem>
        ))}
    </BlogListContainer>
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
