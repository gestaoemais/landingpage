import React from 'react'
import Modals from './Modal'
import { Col } from 'reactstrap'

const Box = props => {
  return (
    <React.Fragment>
      <Col sm="6" md="3" className="inner_box">
        <i className={`inner_box__iconL fal fa-${props.icon}`} />
        <h4 className="inner_box__title">{props.boxtitle}</h4>
        <p className="inner_box__p">{props.boxtext}</p>
        <Modals {...props} />
      </Col>
    </React.Fragment>
  )
}

export default Box
