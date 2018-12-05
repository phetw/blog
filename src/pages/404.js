import React from 'react'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  width: '100vw',
  height: '100vh',
}

const textStyles = { display: 'inline-block' }

function NotFound() {
  return (
    <main style={styles}>
      <section style={{ maxWidth: '400px', alignSelf: 'center' }}>
        <h1 style={textStyles}>404 </h1>
        <span style={{ margin: '0 1rem' }}> | </span>
        <p style={textStyles}> page not found</p>
      </section>
    </main>
  )
}

NotFound.propTypes = {}

export default NotFound
