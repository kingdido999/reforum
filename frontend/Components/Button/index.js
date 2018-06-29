import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${props => props.theme.fontColor};
  background: white;
  border-color: ${props => props.theme.borderColor};
  width: 100%;
  transition: background 0.3s;

  /* Primary Button */
  ${props =>
    props.primary &&
    css`
      color: white;
      background: ${props => props.theme.primaryColor};
      border-color: ${props => props.theme.primaryColor};
      &:hover {
        background: ${props => props.theme.primaryColorLight};
      }
    `};
`

class Button extends Component {
  render () {
    const { onClick } = this.props

    return (
      <StyledButton onClick={onClick} {...this.props}>
        {this.props.children}
      </StyledButton>
    )
  }
}

Button.defaultProps = {}

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button
