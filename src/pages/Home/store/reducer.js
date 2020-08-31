// import * as constants from './constants'
import { fromJS } from 'immutable'
import { constants } from '../store'
const defaultState = fromJS({
  topicList: [],
  //文章列表
  articleList: [],
  articlePage: 1,
  //推荐列表
  recommendList: [],
  page: 1,
  totalPage: 1,
  writerList: [],
  showScroll: false
})


const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  })
}

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    case constants.CHANGE_LIST:
      return state.set('writerList', action.data).set('totalPage', action.totalPage)
    case constants.ADD_HOME_LIST:
      return addArticleList(state, action)
    case constants.TOGGLE_SCROLL_TOP:
      return state.set("showScroll", action.show)  
    default:
      return state
  }
}