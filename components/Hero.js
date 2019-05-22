import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

const Hero = props => {
    return (
        <React.Fragment>
            <div className='text-center hero'>
                <Container>
                    <Row className="justify-content-sm-center align-items-center h-inner">
                        <Col className="col-sm-10 col-md-8 align-self-center">
                            <div className="hero__content" >
                                <h1 className='display-3'>Algum conteúdo aqui</h1>
                                <p className='lead hero__p'>
                                    Texto pequeno que reforce a ideia principal, aqui. Que
                                    tenha mais ou menos esse mesmo tamanho.
                                </p>
                                <p className='lead mb-0'>
                                    <Button color='primary'>Saiba mais sobre nós</Button>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Hero
