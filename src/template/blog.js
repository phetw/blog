import React, { Fragment, memo } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

import ShareToSocial from '../components/ShareToSocial'

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
`

const BlogContainer = styled.main`
  max-width: 800px;
  margin: 0 auto;
`

const ContentWrapper = styled.section`
  margin: 1.25rem 1.75rem;
`

const Title = styled.h1`
  margin: 1.35rem 0;
`

const PublishDate = styled.p`
  color: #c3c3c3;
  margin-bottom: 1rem;
  font-size: 75%;
`

const BlogTemplate = memo(({ data: { site, markdownRemark: post } }) => (
  <Fragment>
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
    <BlogContainer>
      <ContentWrapper>
        <Navbar>
          <Link style={{ fontSize: '1rem' }} to="/">
            Home
          </Link>
        </Navbar>
        <Title>{post.frontmatter.title}</Title>
        <PublishDate>{post.frontmatter.date}</PublishDate>
        <hr />
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <ShareToSocial
          title={post.frontmatter.title}
          path={post.frontmatter.path}
          siteUrl={site.siteMetadata.siteUrl}
        />
      </ContentWrapper>
    </BlogContainer>
  </Fragment>
))

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
