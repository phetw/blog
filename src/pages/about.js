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

const SocialMedias = styled.section`
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

const Separator = styled.span`
  color: ${props => theme(props.theme.main).menu};
`

const ProfileImage = {
  maxWidth: '140px',
  maxHeight: '140px',
  margin: '0.75rem 0',
  borderRadius: '50%',
  boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.25)',
}

const About = memo(props => (
  <Layout>
    <SEO description={props.data.site.siteMetadata.description} />
    <Card>
      <Img
        title="My profile picture"
        alt="My profile picture"
        style={ProfileImage}
        imgStyle={{
          borderRadius: '50%',
        }}
        fixed={props.data.file.childImageSharp.fixed}
      />
      <Topic>Who Am I </Topic>
      <Detail>
        Hello! <span role="img">🙏</span> My name is Wasuwat Limsuparhat (Phet),
        I am a web developer - born and raised in Bangkok, Thailand.
      </Detail>
      <br />
      <Topic>What I do</Topic>
      <Detail>
        Over the past years, my works primarily focus on enterprise front-end
        web development with Javascript-based frameworks. I am obsess about web
        performance and smooth animations.
      </Detail>
      <br />
      <Topic>Other interests</Topic>
      <Detail>
        I like readings and learning things, but I tends to forget very easily
        which is the primary reason why I started writing blogs. I occasionally
        play games and I do love watching and playing football.
      </Detail>
      <br />
      <Topic>Get in touch</Topic>
      <SocialMedias>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/rappad"
        >
          GitHub
        </a>
        <Separator>•</Separator>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/wasuwat-limsuparhat-a57b52137/"
        >
          LinkedIn
        </a>
      </SocialMedias>
    </Card>
  </Layout>
))

export default About

export const ProfileImageQuery = graphql`
  query ProfileImageQuery {
    site {
      siteMetadata {
        description
      }
    }
    file(relativePath: { eq: "me_2.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
