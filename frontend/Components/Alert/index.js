import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledAlert = styled.div`
  margin: 0.4rem 0;
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.fontColorLight};

  /* Error Alert */
  ${props =>
    props.error &&
    css`
      border: 1px solid #ffa39e;
      background-color: #fff1f0;
    `};
`

class Alert extends Component {
  render () {
    const { message } = this.props
    return <StyledAlert {...this.props}>{message}</StyledAlert>
  }
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Alert
