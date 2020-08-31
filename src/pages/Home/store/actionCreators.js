import axios from 'axios'
import { fromJS } from 'immutable'
import * as constants from './constants'

export const changePageList = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})


const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 5)
})


export const getList = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then(res => {
        if (res.data.success) {
          const action = changeList(res.data.data.writerList);
          dispatch(action)
        }
      })
      .catch(err => {
        console.log("fail", err)
      })
  }
}
const changeHomeData = ({ topicList, recommendList, articleList, writerList }) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList,
  recommendList,
  articleList,
  writerList
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then(res => {
        if (res.data.success) {
          const result = res.data.data;
          const action = changeHomeData(result)
          dispatch(action)
        }
      })
      .catch(err => { console.log(err) })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then(res => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1))
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})