import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'Components/Button'
import Alert from 'Components/Alert'
import ThirdPartyLogin from 'Views/ThirdPartyLogin'
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
    const { errors } = this.props

    return (
      <div className={classnames(appLayout.container)}>
        <form
          onSubmit={this.handleSubmit}
          className={classnames(formStyle.form)}
        >
          <h2>注册</h2>

          {errors.map((msg, index) => (
            <Alert key={index} type='error' message={msg} />
          ))}

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
              placeholder='密码（不少于6位）'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className={classnames(formStyle.inputField)}>
            <Button>注册</Button>
          </div>
        </form>

        <div className={classnames(formStyle.form)}>
          <ThirdPartyLogin />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { errors } = state.userSignUp

  return {
    errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => dispatch(signUp(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp)
