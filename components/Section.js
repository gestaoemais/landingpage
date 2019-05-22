import React from 'react'
import Header from './Header'
import { Container, Row, Col } from 'reactstrap'

const Section = props => {
    return (
        <React.Fragment>
            <section className="section__wrap">
                <Container>
                    <Header {...props} />
                    <Row>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Section
