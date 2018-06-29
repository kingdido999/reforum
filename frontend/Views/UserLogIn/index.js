import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'Components/Button'
import Alert from 'Components/Alert'
import Form from 'Components/Form'
import Input from 'Components/Input'
import ThirdPartyLogin from 'Views/ThirdPartyLogin'
import { login } from './actions'
import classnames from 'classnames'
import appLayout from 'SharedStyles/appLayout.css'

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
    const { errors } = this.props

    return (
      <div className={classnames(appLayout.containerSmall)}>
        <Form onSubmit={this.handleSubmit}>
          <h2>登录</h2>

          {errors.map((msg, index) => (
            <Alert key={index} error message={msg} />
          ))}

          <Form.Item>
            <Input
              type='text'
              name='username'
              value={this.state.username}
              placeholder='用户名或邮箱'
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              type='password'
              name='password'
              placeholder='密码'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item>
            <Button primary>登录</Button>
          </Form.Item>
        </Form>

        <ThirdPartyLogin />
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { errors } = state.userLogIn

  return {
    errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogIn)
