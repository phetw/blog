import React from 'react'
import './WhoAmI.css'
import ProfileImageSrc from '../../static/img/me.jpg'

const WhoAMI = () => (
  <section className="profile-wrapper">
    <img className="profile-img" src={ProfileImageSrc} />
    <section style={{ alignSelf: 'center' }}>
      <a
        className="profile-name"
        href="https://rappad.github.io/wasuwat-limsuparhat"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wasuwat Limsuparhat
      </a>
      <p className="one-liner">
        I write to remind and keep track on what I've learn.
      </p>
    </section>
  </section>
)

export default WhoAMI
