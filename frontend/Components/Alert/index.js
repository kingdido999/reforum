import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './styles'

class Alert extends Component {
  render () {
    const { type, message } = this.props
    return (
      <div className={classnames(styles.alert, styles[type])}>{message}</div>
    )
  }
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default Alert
