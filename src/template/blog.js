import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

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

const ShareToSocial = styled.section`
  float: right;
  margin-bottom: 2rem;
`

const BlogTemplate = ({ data: { site, markdownRemark: post } }) => (
  <BlogContainer>
    <Helmet
      htmlAttributes={{ lang: 'th' }}
      title={`${post.frontmatter.title} - ${site.siteMetadata.title}`}
      meta={[
        { name: 'author', content: site.siteMetadata.author },
        {
          name: 'description',
          content: `${post.frontmatter.description} | ${post.excerpt} | ${
            site.siteMetadata.description
          }`,
        },
        { name: 'og:title', content: post.frontmatter.title },
        {
          name: 'og:description',
          content: `${post.frontmatter.description}`,
        },
        {
          name: 'og:image',
          content: post.frontmatter.thumbnail.childImageSharp.resize.src,
        },
      ]}
    />
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
      <ShareToSocial>
        Share to :{' '}
        <a
          href={`https://facebook.com/sharer.php?u=${
            site.siteMetadata.siteUrl
          }${post.frontmatter.path}`}
          rel="nofollow"
          target="_blank"
          title="Share on Facebook"
        >
          Facebook
        </a>
      </ShareToSocial>
    </ContentWrapper>
  </BlogContainer>
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
