import React, { memo } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import SEO from '../components/Seo'
import Card from '../components/Card'
import Layout from '../components/Layout'

const Topic = styled.h1`
  margin: 1.5rem 0;
`

const SocialWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.75rem;
`

const SocialLink = styled.a`
  margin: 0 0.75rem;
`

const Index = memo(props => (
  <Layout>
    <SEO
      subTitle="a software developer, reader and coffee lover."
      description="Get to know more about me"
    />
    <Card>
      <Img
        title="My profile picture"
        alt="My profile picture"
        style={{
          margin: '0.75rem 0',
          borderRadius: '50%',
          boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.25)',
        }}
        imgStyle={{
          borderRadius: '50%',
        }}
        fixed={props.data.file.childImageSharp.fixed}
      />
      <Topic>Who Am I </Topic>
      <p>
        Hello! <span role="img">🙏</span> My name is Wasuwat Limsuparhat, I am a
        Javascript developer and a web development enthusiast based in Bangkok,
        Thailand. Nothing starts before a cup of black coffee{' '}
        <span role="img">☕️</span>.
      </p>
      <Topic>What I do</Topic>
      <p>
        I love building a highly performant, beautiful and easy-to-use websites
        and these are things that I always try to achieve when building one. In
        past years, my works primarily focus on front-end web development with
        React.js and few of Angular projects. I also do mini projects on Github
        during my free time, check them out.
      </p>
      <Topic>Other interests</Topic>
      <p>
        I like readings and writing, but I tends to forget very easily. Which is
        the reason why I started writing personal blogs. I also dedicated a fair
        amount of my free time into the blockchain technology including both
        public and private kinds of blockchain which I believe both could
        disrupt many industries in coming years.
      </p>
      <Topic>Get in touch</Topic>
      <SocialWrapper>
        <SocialLink
          rel="noopener"
          target="_blank"
          href="https://github.com/rappad"
        >
          GitHub
        </SocialLink>
        <SocialLink
          rel="noopener"
          target="_blank"
          href="https://medium.com/@phet.w"
        >
          Medium
        </SocialLink>
        <SocialLink
          rel="noopener"
          target="_blank"
          href="https://www.linkedin.com/in/wasuwat-limsuparhat-a57b52137/"
        >
          LinkedIn
        </SocialLink>
      </SocialWrapper>
    </Card>
  </Layout>
))

export default Index

export const query = graphql`
  query IndexQuery {
    file(relativePath: { eq: "me_2.jpg" }) {
      childImageSharp {
        fixed(width: 140, height: 140) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
