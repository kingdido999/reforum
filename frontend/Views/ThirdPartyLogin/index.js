import React from 'react'
import classnames from 'classnames'
import Form from 'Components/Form'
import Button from 'Components/Button'
import FontAwesomeIcon from 'Components/FontAwesomeIcon'

const ThirdPartyLogin = () => {
  return (
    <div>
      <h4>第三方账号登录：</h4>

      <Form.Item>
        <a href='/api/user/authViaGitHub'>
          <Button fullWidth>
            <FontAwesomeIcon type='github' />
          </Button>
        </a>
      </Form.Item>
    </div>
  )
}

export default ThirdPartyLogin
