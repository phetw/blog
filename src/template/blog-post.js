import React, { Fragment, memo } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '../components/layout/Layout'

import Title from '../components/blog/Title'
import BlogPublishDate from '../components/blog/PublishDate'
import BlogContent from '../components/blog/Content'
import BlogFooter from '../components/blog/Footer'

import favicon from '../../static/favicon.png'

import theme from '../utils/color'

const BlogContainer = styled.main`
  width: 100%;
  border-radius: 4px;
  max-width: 700px;
  background-color: ${props => theme(props.theme.main).postBg};
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
  @media screen and (max-width: 600px) {
    padding: 1.75rem;
  }
  @media screen and (min-width: 601px) {
    padding: 3rem;
  }
`

const BlogTitle = styled(Title)`
  font-size: 2rem;
`

const BlogMetaData = styled.section`
  margin: 1rem 0;
`

const VerticalLine = styled.hr`
  background: ${props =>
    props.theme.main === 'light' ? 'hsla(0,0%,0%,0.2)' : '#c3c3c3'};
`

const BlogTemplate = memo(
  ({ location, data: { site, markdownRemark: post } }) => (
    <Fragment>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
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
          <BlogMetaData>
            <BlogTitle>{post.frontmatter.title}</BlogTitle>
            <BlogPublishDate>{post.frontmatter.date}</BlogPublishDate>
          </BlogMetaData>

          <VerticalLine />
          <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
          <VerticalLine />

          <BlogFooter
            title={post.frontmatter.title}
            path={location.pathname}
            siteUrl={site.siteMetadata.siteUrl}
          />
        </BlogContainer>
      </Layout>
    </Fragment>
  )
)

export default BlogTemplate

export const BlogPostBySlugQuery = graphql`
  query BlogPostBySlugQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(format: PLAIN, pruneLength: 300)
      frontmatter {
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
