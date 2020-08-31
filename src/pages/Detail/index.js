import React, { PureComponent } from 'react'
import {
  DetailWrapper,
  Header,
  Content
} from './style'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>
          {title}
        </Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    const ID = this.props.match.params.id; //获取上个页面传过来的路由参数
    this.props.getDetail(ID);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
});
export default connect(mapState, mapDispatch)(withRouter(Detail))