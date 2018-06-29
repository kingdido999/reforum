import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './styles.css'
import PropTypes from 'prop-types'

class Profile extends Component {
  render () {
    const { name, gitHandler, location, avatarUrl } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.avatarContainer}>
          {avatarUrl && (
            <img
              className={styles.avatar}
              src={avatarUrl}
              alt={`${name} avatar`}
            />
          )}
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.name}>{name}</div>
          {gitHandler && (
            <div className={styles.gitHandler}>
              <i className={classnames('fa fa-github-alt', styles.gitIcon)} />{' '}
              {gitHandler}
            </div>
          )}

          {location && <div className={styles.location}>{location}</div>}
        </div>
      </div>
    )
  }
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  gitHandler: PropTypes.string,
  location: PropTypes.string,
  avatarUrl: PropTypes.string,
}

export default Profile
