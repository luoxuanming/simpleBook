import axios from 'axios'
import * as constants from './constants'
const changeLogin = (value) => ({
  type: constants.CHANGE_LOGIN,
  value: true
})
export const login = (accout, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${accout}&password=${password}`)
      .then(res => {
        const result = res.data.data;
        console.log(res)
        if (result) {
          dispatch(changeLogin())
        } else {
          alert('登录失败')
        }
      })
      .catch(err => {
        console.log("fail", err)
      })
  }
}

export const logout = () => ({
  type: constants.LOGOUT,
  value: false
})