import React from 'react'
import { Row, Col, Button, Input } from 'reactstrap'

export default class Forms extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md='6' lg='4' className='mb-md-30'>
                        <div className='wrap_form'>
                            <i className='fal fa-user-circle' />
                            <Input
                                type='text'
                                name='name'
                                id='yourName'
                                placeholder='Digite seu nome'
                            />
                        </div>
                    </Col>
                    <Col md='6' lg='4' className='mb-md-30'>
                        <div className='wrap_form'>
                            <i className='fal fa-at' />
                            <Input
                                type='email'
                                name='email'
                                id='yourEmail'
                                placeholder='Digite seu e-mail'
                            />
                        </div>
                    </Col>
                    <Col md='6' lg='4' className='mr-auto ml-auto'>
                        <Button className='wrap_form__btn'>INSCREVA-SE</Button>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
