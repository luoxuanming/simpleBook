import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  SearchInfoTitle
} from './style'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import { actionCreators as loginActionCreators } from '../../pages/Login/store'

class Header extends Component {

  getListArea() {
    const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
              <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe606;</i>
                换一批
              </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }


  render() {
    const { focused, handleInputFocused, handleInputBlur, list, login, logout } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className="fl active">首页</NavItem>
          <NavItem className="fl">下载APP</NavItem>
          {
            login ?
              <NavItem className="fr" onClick={logout}>退出</NavItem> :
              <Link to='/login'><NavItem className="fr">登录</NavItem></Link>
          }

          <NavItem className="fr">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => { handleInputFocused(list) }}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe623;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className="writting">写文章</Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    // state.get('header').get('focused')
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //搜索框聚焦
    handleInputFocused(list) {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },

    //搜索框失焦
    handleInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    },

    //热搜框移入
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },

    //热搜框移出
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },

    //换一批
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'

      if (page < totalPage) {
        dispatch(actionCreators.changePageList(page + 1))
      } else {
        dispatch(actionCreators.changePageList(1))
      }

    },

    //退出
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)