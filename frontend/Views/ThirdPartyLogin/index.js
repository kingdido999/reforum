import React from 'react'
import formStyle from 'SharedStyles/form.css'
import classnames from 'classnames'
import Button from 'Components/Button'
import FontAwesomeIcon from 'Components/FontAwesomeIcon'

const ThirdPartyLogin = () => {
  return (
    <div>
      <h4>第三方账号登录：</h4>

      <div className={classnames(formStyle.inputField)}>
        <a href='/api/user/authViaGitHub'>
          <Button>
            <FontAwesomeIcon type='github' />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default ThirdPartyLogin
