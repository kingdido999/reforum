import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'Components/Button'
import { signUp } from './actions'

class UserSignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
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

  handleSubmit = async e => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  render () {
    return (
      <div>
        <form>
          <div>
            <label>用户名:</label>
            <input
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>邮箱:</label>
            <input
              type='email'
              name='email'
              value={this.state.email}
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
            <Button onClick={this.handleSubmit}>注册</Button>
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
    signUp: user => dispatch(signUp(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp)
