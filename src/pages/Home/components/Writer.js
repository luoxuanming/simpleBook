import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  WriterWrapper,
  WriterTop,
  WriteItem,
  WriteMore,
  WriterSwitch
} from '../style'
import {actionCreators} from '../store'
class Writer extends PureComponent {
  componentDidMount() {
    this.props.getWriterList();
  }

  getList() {
    const { list, page } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if(newList.length) {
      for (let i = (page - 1) * 5; i < page * 5; i++) {
        pageList.push(
          <WriteItem key={newList[i].id}>
            <img src={newList[i].imgUrl} alt="" />
            <a className="follow" href="###">关注</a>
            <div className="center">
              <a href="###">{newList[i].Author}</a>
              <p>{newList[i].desc}</p>
            </div>
          </WriteItem>
        )
      }
    }
    return pageList
  }

  render() {
    const { handleChangePage, page, totalPage } = this.props;
    return (
      <WriterWrapper className="wrapper">
        <WriterTop>
          推荐作者
          <WriterSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe606;</i>
            换一批
          </WriterSwitch>
        </WriterTop>
        {this.getList()}
        <WriteMore href="###">
          查看全部
        </WriteMore>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'writerList']),
    page: state.getIn(['home', 'page']),
    totalPage: state.getIn(['home', 'totalPage']),
  }
}

const mapDispatch = (dispatch) => {
  return {
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

    getWriterList() {
      dispatch(actionCreators.getList())
    }
  }
}
export default connect(mapState, mapDispatch)(Writer)