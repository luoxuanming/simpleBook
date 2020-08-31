import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'

import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    const { login, loginStatus } = this.props;
    console.log(loginStatus)
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => { this.accout = input }}></Input>
            <Input placeholder="密码" type="password" ref={(input) => { this.password = input }}></Input>
            <Button onClick={() => login(this.accout, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }

  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  login(accout, password) {
    dispatch(actionCreators.login(accout.value, password.value))
  }
});

export default connect(mapState, mapDispatch)(Login)