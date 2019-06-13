import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '../../utils/color'

const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 40px;
  margin: 1rem auto;
  text-align: center;
`

const Switch = styled.label`
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  height: 1em;
  width: 2em;
  will-change: background-color;
  background-color: ${props => theme(props.theme.main).cardBg};
  border-radius: 1em;

  input {
    position: absolute;
    opacity: 0;
  }

  input:checked + div {
    will-change: transform;
    transform: translate3d(100%, 0, 0);
  }
`

const SwitchButton = styled.div`
  height: 1em;
  width: 1em;
  border-radius: 1em;
  background: #fff;
  box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
`

export default class ThemeToggler extends PureComponent {
  render() {
    const { checked, onClick } = this.props
    return (
      <SwitchContainer>
        <Switch>
          <input type="checkbox" checked={checked} onClick={onClick} readOnly />{' '}
          <SwitchButton />
        </Switch>
      </SwitchContainer>
    )
  }
}

ThemeToggler.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
