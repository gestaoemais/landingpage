import React from 'react'
import { Col } from 'reactstrap'

const Box = props => {
    return (
        <React.Fragment>
            <Col sm="6" md="3" className="inner_box">
                <i className={`inner_box__iconL fal fa-${props.icon}`}></i>
                <h4 className="inner_box__title">{props.boxtitle}</h4>
                <p className="inner_box__p">{props.boxtext}</p>
                <a href="#" className="btn inner_box__btn btn-link">Saiba mais</a>
            </Col>
        </React.Fragment>
    )
}

export default Box