import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html:content}} />
        
      </DetailWrapper>
    )
  }
  componentWillMount() {
    window.scrollTo(0,0)
  }
  componentDidMount() {
    this.props.getDetailInfo(this.props.match.params.id)
  }
}


const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail','content'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDetailInfo(id) {
      dispatch(actionCreators.getdetaill(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatch)(Detail)