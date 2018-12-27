import React, { memo } from 'react'
import styled from 'styled-components'

import ProfileImageSrc from '../../static/img/me.jpg'

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-top: 1.5rem;
  @media screen and (min-width: 700px) {
    height: 120px;
  }

  @media screen and (max-width: 699px) {
    height: 90px;
  }
`

const ProfileImage = styled.img`
  align-self: center;
  @media screen and (min-width: 700px) {
    width: 105px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 0;
    margin-right: 1.5rem;
  }

  @media screen and (max-width: 699px) {
    display: none;
  }
`

const ProfileDetails = styled.section`
  align-self: center;
`

const ProfileName = styled.a`
  color: #252525;
  margin: 0;
  font-size: 120%;
  font-weight: 700;
`

const CoolOneLiner = styled.p`
  color: #bbbbbb;
  font-size: 80%;
  margin: 0;
`

const WhoAMI = memo(() => (
  <SectionWrapper>
    <ProfileImage src={ProfileImageSrc} />
    <ProfileDetails>
      <ProfileName
        href="https://rappad.github.io/wasuwat-limsuparhat"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wasuwat Limsuparhat
      </ProfileName>
      <CoolOneLiner>
        I write to remind and keep track on what I've learn.
      </CoolOneLiner>
    </ProfileDetails>
  </SectionWrapper>
))

export default WhoAMI
