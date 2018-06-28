import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const FontAwesomeIcon = ({ type }) => {
  return <i className={classnames(`fa fa-${type}`)} />
}

FontAwesomeIcon.propTypes = {
  type: PropTypes.string.isRequired,
}

export default FontAwesomeIcon
