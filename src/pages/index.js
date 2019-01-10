import React, { memo } from 'react'
import { graphql, Link, navigate } from 'gatsby'
import styled from 'styled-components'

import SEO from '../components/Seo'
import Layout from '../components/Layout'

const BlogItem = styled.article`
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
  background-color: ${props =>
    props.theme.main === 'light' ? 'white' : '#424242'};
  box-shadow: 0 3px 10px rgba(25, 17, 34, 0.05);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(25, 17, 34, 0.1);
  }
`

const BlogItemTitle = styled.h1`
  margin: 1rem 0;
  font-size: 1.35rem;
`

const BlogItemContentPreview = styled.p`
  color: ${props => (props.theme.main === 'light' ? '#616161' : '#c3c3c3')};
  font-size: 90%;
  margin-bottom: 1.2rem;
`

const BlogItemPublishDate = styled.p`
  font-size: 12px;
  color: ${props => (props.theme.main === 'light' ? '#c3c3c3' : '#797979')};
  margin: 0;
  align-self: flex-end;
`

const Home = memo(({ data: { allMarkdownRemark } }) => (
  <Layout>
    <SEO description="I write blogs to remind and keep track on what I ve learn." />
    {allMarkdownRemark.edges
      .filter(post => post.node.frontmatter.title.length > 0)
      .map(({ node: post }) => (
        <BlogItem key={post.id} onClick={() => navigate(post.frontmatter.path)}>
          <BlogItemTitle>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </BlogItemTitle>
          <BlogItemContentPreview>
            {post.frontmatter.description}
          </BlogItemContentPreview>
          <BlogItemPublishDate>{post.frontmatter.date}</BlogItemPublishDate>
        </BlogItem>
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
