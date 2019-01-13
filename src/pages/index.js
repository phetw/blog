import React, { memo } from 'react'
import { graphql, Link, navigate } from 'gatsby'

import SEO from '../components/Seo'
import Layout from '../components/layout/Layout'

import Title from '../components/blog/Title'
import PublishDate from '../components/blog/PublishDate'
import Card from '../components/blog/Card'
import ContentPreview from '../components/blog/ContentPreview'

const Home = memo(props => (
  <Layout>
    <SEO description="I write blogs to remind and keep track on what I ve learn." />
    {props.data.allMarkdownRemark.edges
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => (
        <Card key={post.id} onClick={() => navigate(post.frontmatter.path)}>
          <Title>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </Title>
          <ContentPreview>{post.frontmatter.description}</ContentPreview>
          <PublishDate>{post.frontmatter.date}</PublishDate>
        </Card>
      ))}
  </Layout>
))

export default Home

export const pageQuery = graphql`
  query BlogQuery {
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
  }
`
