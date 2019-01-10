import React, { Fragment, memo } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogFooter from '../components/BlogFooter'

import favicon from '../../static/favicon.png'

const BlogContainer = styled.main`
  width: 100%;
  border-radius: 4px;
  max-width: 700px;
  background-color: ${props =>
    props.theme.main === 'light' ? 'white' : '#424242'};
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
  @media screen and (max-width: 600px) {
    padding: 0rem;
  }
  @media screen and (min-width: 601px) {
    padding: 1.5rem 1rem;
  }
`

const ContentWrapper = styled.section`
  margin: 1.25rem 1.75rem;
`

const Title = styled.h1`
  margin: 1.35rem 0;
  color: ${props =>
    props.theme.main === 'light' ? 'hsla(0,0%,0%,0.875)' : '#c3c3c3'};
`

const PublishDate = styled.p`
  font-size: 75%;
  margin-bottom: 1rem;
  color: ${props => (props.theme.main === 'light' ? '#c3c3c3' : '#797979')};
`

const VerticalLine = styled.hr`
  background: ${props =>
    props.theme.main === 'light' ? 'hsla(0,0%,0%,0.2)' : '#c3c3c3'};
`

const Content = styled.section`
  color: ${props =>
    props.theme.main === 'light' ? 'hsla(0,0%,0%,0.8)' : '#b9b9b9'};
  h1 {
    color: ${props =>
      props.theme.main === 'light' ? 'hsla(0,0%,0%,0.875)' : '#c3c3c3'};
  }
  blockquote {
    p {
      color: ${props =>
        props.theme.main === 'light' ? 'hsla(0,0%,0%,0.59)' : '#888888'};
    }
  }
  p {
    code {
      background: ${props =>
        props.theme.main === 'light' ? '#f5f2f0' : '#c7c7c7'};
    }
  }
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
          content: `${post.frontmatter.description}| ${post.excerpt} `,
        },
        { name: 'og:title', content: post.frontmatter.title },
        {
          name: 'og:description',
          content: `${post.frontmatter.description} `,
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
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
    <Layout>
      <BlogContainer>
        <ContentWrapper>
          <Title>{post.frontmatter.title}</Title>
          <PublishDate>{post.frontmatter.date}</PublishDate>

          <VerticalLine />
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          <VerticalLine />

          <BlogFooter
            title={post.frontmatter.title}
            path={post.frontmatter.path}
            siteUrl={site.siteMetadata.siteUrl}
          />
        </ContentWrapper>
      </BlogContainer>
    </Layout>
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
