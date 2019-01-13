import React, { memo } from 'react'
import { graphql, Link, navigate } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/Seo'
import Layout from '../components/Layout'

import BlogTitle from '../components/BlogTitle'
import BlogPublishDate from '../components/BlogPublishDate'

const BlogCard = styled.article`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 1.35rem;
  border-radius: 4px;
  width: 100%;
  max-width: 550px;
  padding: 2.15rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: ${({ theme }) =>
    theme.main === 'light' ? 'white' : '#424242'};
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(25, 17, 34, 0.1);
  }
`

const BlogContentPreview = styled.p`
  color: ${({ theme }) => (theme.main === 'light' ? '#616161' : '#c3c3c3')};
  font-size: 90%;
  margin-bottom: 1.2rem;
`

const Home = memo(({ data: { allMarkdownRemark } }) => (
  <Layout>
    <SEO description="I write blogs to remind and keep track on what I ve learn." />
    {allMarkdownRemark.edges
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => (
        <BlogCard key={post.id} onClick={() => navigate(post.frontmatter.path)}>
          <BlogTitle>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </BlogTitle>
          <BlogContentPreview>
            {post.frontmatter.description}
          </BlogContentPreview>
          <BlogPublishDate>{post.frontmatter.date}</BlogPublishDate>
        </BlogCard>
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
