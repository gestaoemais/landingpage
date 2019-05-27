import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Modals extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    render() {
        return (
            <div>
                <Button className='btn_modal' onClick={this.toggle}>
                    Saiba mais
                </Button>
                <Modal
                    scrollable={true}
                    isOpen={this.state.modal}
                    centered={true}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>
                        {this.props.boxtitle}
                    </ModalHeader>
                    <ModalBody>
                        <h5>{this.props.modalInnerTitle_1}</h5>
                        <p>{this.props.modalContent_1}</p>
                        <h5>{this.props.modalInnerTitle_2}</h5>
                        <p>{this.props.modalContent_2}</p>
                        <h5>{this.props.modalInnerTitle_3}</h5>
                        <p>{this.props.modalContent_3}</p>
                        <h5>{this.props.modalInnerTitle_4}</h5>
                        <p>{this.props.modalContent_4}</p>
                        <h5>{this.props.modalInnerTitle_5}</h5>
                        <p>{this.props.modalContent_5}</p>
                    </ModalBody>
                    <ModalFooter />
                </Modal>
            </div>
        )
    }
}

export default Modals
