import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    const newList = list.toJS();
    return (
      <>
        {
          newList.map(item => (
            <Link key={item.id} to={'/detail/'+item.id}>
              <ListItem>
                <img className="pic" src={item.imgUrl} alt="" />
                <ListInfo>
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapState, mapDispatch)(List)