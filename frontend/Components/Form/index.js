import React from 'react'
import PropTypes from 'prop-types'
import FormItem from './item'
import styles from './styles'
import classnames from 'classnames'

const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className={classnames(styles.form)}>
      {children}
    </form>
  )
}

Form.Item = FormItem
Form.propTypes = {
  onSubmit: PropTypes.func,
}

export default Form
