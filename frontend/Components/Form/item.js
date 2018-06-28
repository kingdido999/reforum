import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import classnames from 'classnames'

const FormItem = ({ children }) => {
  return <div className={classnames(styles.formItem)}>{children}</div>
}

FormItem.propTypes = {}

export default FormItem
