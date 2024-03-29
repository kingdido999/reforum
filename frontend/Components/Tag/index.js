import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './styles'
import PropTypes from 'prop-types'

import Button from 'Components/Button'

class Tag extends Component {
  render () {
    const { name, withRemove, removeAction } = this.props

    return (
      <div
        className={classnames(styles.tag, withRemove && styles.tagWithRemove)}
      >
        {name}
        {withRemove && (
          <Button onClick={removeAction} className={styles.removeButton}>
            <i className={'fa fa-close'} />
          </Button>
        )}
      </div>
    )
  }
}

Tag.defaultProps = {
  name: '',
  withRemove: false,
  removeAction: () => {},
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  withRemove: PropTypes.bool,
  removeAction: PropTypes.func,
}

export default Tag
