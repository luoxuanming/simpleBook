import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  RecommedWrapper,
  RecommedItem
} from '../style'
class Recommed extends PureComponent {
  render() {
    const { list } = this.props;
    const newList = list.toJS();
    return (
      <RecommedWrapper>
        {
          newList.map(item => (
            <RecommedItem key={item.id} imgUrl={item.imgUrl} />
          ))
        }
      </RecommedWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapState, null)(Recommed)