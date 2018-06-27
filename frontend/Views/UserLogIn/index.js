import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'Components/Button'
import PropTypes from 'prop-types'
import { login } from './actions'

class UserLogIn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = e => {
    const { target } = e
    const { name, value } = target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.login(this.state)
  }

  render () {
    return (
      <div>
        <form>
          <div>
            <label>用户名/邮箱:</label>
            <input
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>密码:</label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Button onClick={this.handleSubmit}>登录</Button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogIn)
