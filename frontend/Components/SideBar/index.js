import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './styles'
import PropTypes from 'prop-types'

import Button from 'Components/Button'

class SideBar extends Component {
  render () {
    const { currentForum } = this.props

    return (
      <div className={styles.sidebarContainer}>
        <Link to={`/${currentForum}/new_discussion`}>
          <Button type='outline' fullWidth noUppercase>
            New Discussion
          </Button>
        </Link>
      </div>
    )
  }
}

SideBar.defaultProps = {
  currentForum: 'general',
}

SideBar.propTypes = {
  currentForum: PropTypes.string,
}

export default SideBar
