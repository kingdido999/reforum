import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'Components/Button'
import { signUp } from './actions'
import classnames from 'classnames'
import appLayout from 'SharedStyles/appLayout.css'
import formStyle from 'SharedStyles/form.css'

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
      <div className={classnames(appLayout.container)}>
        <form className={classnames(formStyle.form)}>
          <h2>注册</h2>
          <div className={classnames(formStyle.inputField)}>
            <input
              type='text'
              name='username'
              placeholder='用户名'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className={classnames(formStyle.inputField)}>
            <input
              type='email'
              name='email'
              placeholder='邮箱'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className={classnames(formStyle.inputField)}>
            <input
              type='password'
              name='password'
              placeholder='密码'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className={classnames(formStyle.inputField)}>
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
