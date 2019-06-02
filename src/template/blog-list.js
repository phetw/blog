import React, { memo } from 'react'
import { graphql, Link, navigate } from 'gatsby'

import SEO from '../components/Seo'
import Layout from '../components/layout/Layout'
import Pagination from '../components/layout/Pagination'

import Title from '../components/blog/Title'
import PublishDate from '../components/blog/PublishDate'
import Card from '../components/blog/Card'
import ContentPreview from '../components/blog/ContentPreview'

const BlogList = memo(props => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext

  return (
    <Layout>
      <SEO description={props.data.site.siteMetadata.title} />

      {posts.map(({ node: post }) => (
        <Card key={post.id} onClick={() => navigate(post.fields.slug)}>
          <Title>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </Title>
          <ContentPreview>{post.frontmatter.description}</ContentPreview>
          <PublishDate>{post.frontmatter.date}</PublishDate>
        </Card>
      ))}
      <Pagination numPages={numPages} currentPage={currentPage} />
    </Layout>
  )
})

export default BlogList

export const BlogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt(format: PLAIN)
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
