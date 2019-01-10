import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledThemeToggler = styled.span`
  cursor: pointer;
  transition: transform 200ms ease;
  &:hover {
    transform: scale(1.3);
  }
`

const ThemeToggler = memo(({ theme, onClick }) => (
  <StyledThemeToggler role="emoji" onClick={onClick}>
    {theme === 'light' ? '🌙' : '☀️'}
  </StyledThemeToggler>
))

ThemeToggler.propTypes = {
  theme: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ThemeToggler
