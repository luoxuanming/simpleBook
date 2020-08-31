import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem
} from '../style'
class Topic extends PureComponent {
  render() {
    const { list } = this.props;
    const newList = list.toJS();
    return (
      <TopicWrapper>
        {
          newList.map((item) => (
              <TopicItem key={item.id}>
                <img className="topic-pic" src={item.imgUrl} alt="" />
                  {item.title}
              </TopicItem>
          ))
        }
      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Topic)