import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'Components/Button'
import Alert from 'Components/Alert'
import { login } from './actions'
import classnames from 'classnames'
import appLayout from 'SharedStyles/appLayout.css'
import formStyle from 'SharedStyles/form.css'

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
    const { errorMsg } = this.props

    return (
      <div className={classnames(appLayout.container)}>
        <form className={classnames(formStyle.form)}>
          <h2>登录</h2>

          {errorMsg ? <Alert type='error' message={errorMsg} /> : null}

          <div className={classnames(formStyle.inputField)}>
            <input
              type='text'
              name='username'
              value={this.state.username}
              placeholder='用户名或邮箱'
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
            <Button onClick={this.handleSubmit}>登录</Button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { errorMsg } = state.userLogIn

  return {
    errorMsg,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogIn)
