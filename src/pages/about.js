import React, { memo } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import theme from '../utils/color'

import SEO from '../components/Seo'
import Layout from '../components/layout/Layout'

import Card from '../components/profile/Card'

import Topic from '../components/blog/Title'
import Detail from '../components/blog/Content'

const SocialWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.75rem;
  a {
    margin: 0 0.75rem;
    text-decoration: none;
    color: ${props => theme(props.theme.main).menu};
  }
`

const DotSeparator = styled.span`
  color: ${props => theme(props.theme.main).menu};
`

const ImageStyle = {
  maxWidth: '140px',
  maxHeight: '140px',
  margin: '0.75rem 0',
  borderRadius: '50%',
  boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.25)',
}

const Index = memo(props => (
  <Layout>
    <SEO
      subTitle="a software developer, reader, coffee lover and a lifelong learner."
      description="Get to know more about me"
    />
    <Card>
      <Img
        title="My profile picture"
        alt="My profile picture"
        style={ImageStyle}
        imgStyle={{
          borderRadius: '50%',
        }}
        fixed={props.data.file.childImageSharp.fixed}
      />
      <Topic>Who Am I </Topic>
      <Detail>
        Hello! <span role="img">🙏</span> My name is Wasuwat (Phet) Limsuparhat,
        I am a Javascript developer and a web development enthusiast based in
        Bangkok, Thailand.
      </Detail>
      <br />
      <Topic>What I do</Topic>
      <Detail>
        Over the past years, my works primarily focus on enterprise front-end
        web development with React.js as well as Angular projects. However, I am
        comfortable with any Javascript-based front-end and back-end frameworks.
      </Detail>
      <br />
      <Topic>Other interests</Topic>
      <Detail>
        I like readings and learning things, but I tends to forget very easily
        which is the reason why I started writing blogs. I play games and I do
        love watching and playing football.
      </Detail>
      <br />
      <Topic>Get in touch</Topic>
      <SocialWrapper>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/rappad"
        >
          GitHub
        </a>
        <DotSeparator>•</DotSeparator>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://medium.com/@phet.w"
        >
          Medium
        </a>
        <DotSeparator>•</DotSeparator>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/wasuwat-limsuparhat-a57b52137/"
        >
          LinkedIn
        </a>
      </SocialWrapper>
    </Card>
  </Layout>
))

export default Index

export const query = graphql`
  query IndexQuery {
    file(relativePath: { eq: "me_2.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
