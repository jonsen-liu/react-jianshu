import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom' 
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'

class Login extends PureComponent {
  render() {
    const { loginStatus } = this.props
    if(!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' innerRef={(input)=>{this.account = input}}/>
            <Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
            <Button onClick={()=>{this.props.login(this.account,this.password)}}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return <Redirect  to='/' />
    }
  }
}


const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(account,password) {
      dispatch(actionCreators.login(account.value,password.value))
    }
  }
}

export default connect(mapStateToProps,mapDispatch)(Login)