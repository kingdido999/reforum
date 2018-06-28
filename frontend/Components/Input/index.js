import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './styles'

const Input = props => {
  return (
    <input className={classnames(styles.input, props.className)} {...props} />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input
