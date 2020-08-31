import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Write extends PureComponent {
  render() {
    const {loginStatus} = this.props;
    console.log("write",loginStatus)
    if(loginStatus) {
      return (
        <div>Write</div>
      )
    } else {
      return <Redirect to='/login'/>
    }
    
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({

});
export default connect(mapState, mapDispatch)(Write)