import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  font-size: 1rem;
  padding: 1rem;
  width: 100%;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  outline: none;

  &:focus {
    border: 1px solid ${props => props.theme.primaryColor};
  }
`

const Input = props => {
  return <StyledInput {...props} />
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input
