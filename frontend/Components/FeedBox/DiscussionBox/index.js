import React, { Component } from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import Moment from 'moment'
import styles from './styles'
import PropTypes from 'prop-types'

import Tag from 'Components/Tag'

class DiscussionBox extends Component {
  render () {
    const {
      voteCount,
      userName,
      discussionTitle,
      time,
      opinionCount,
      tags,
      link,
      userProfile,
    } = this.props

    const postTime = Moment(time)
    const timeDisplay = postTime.from(Moment())

    return (
      <div className={styles.container}>
        <div
          className={classnames(
            styles.title,
            userProfile && styles.titleBottomMargin
          )}
        >
          <Link to={link}>{discussionTitle}</Link>
        </div>

        {!userProfile && (
          <div className={styles.posterInfo}>
            <Link to={`/user/${userName}`} className={styles.name}>
              {userName}
            </Link>
          </div>
        )}

        <div className={styles.boxFooter}>
          <div className={styles.tagsArea}>
            {tags.map(tag => <Tag key={tag} name={tag} />)}
          </div>

          <div className={styles.postInfo}>
            <span className={styles.info}>{timeDisplay}</span>
            <span className={styles.info}>{voteCount} favorites</span>
            <span className={styles.info}>{opinionCount} opinions</span>
          </div>
        </div>
      </div>
    )
  }
}

DiscussionBox.propTypes = {
  discussionId: PropTypes.number,
  voteCount: PropTypes.number,
  userName: PropTypes.string,
  discussionTitle: PropTypes.string,
  time: PropTypes.any,
  opinionCount: PropTypes.number,
  tags: PropTypes.array,
  link: PropTypes.string,
  userProfile: PropTypes.bool,
}

export default DiscussionBox
