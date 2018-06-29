import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${props => (props.primary ? 'white' : props.theme.fontColor)};
  background: ${props => (props.primary ? props.theme.primaryColor : 'white')};
  border-color: ${props =>
    props.primary ? props.theme.primaryColor : props.theme.borderColor};
  width: 100%;
  transition: background 0.3s;
  &:hover {
    background: ${props =>
      props.primary ? props.theme.primaryColorLight : 'white'};
  }
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

Button.defaultProps = {
  type: 'default',
  fullWidth: false,
  noUppercase: false,
  alwaysActive: false,
  className: '',
  style: {},
  onClick: () => {},
}

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'outline', 'primary']),
  fullWidth: PropTypes.bool,
  noUppercase: PropTypes.bool,
  alwaysActive: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

export default Button
