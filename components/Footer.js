import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = props => {
    return (
        <React.Fragment>
            <div className='wrap_footer text-center py-5'>
                <Container>
                    <Row>
                        <Col>
                            <a href="#start">
                                <img className='footer-brand mb-4' src={require('../static/logo.svg?inline')} />
                            </a>
                            <p className='mb-0'>© 2019 - Todos os direitos reservados</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Footer