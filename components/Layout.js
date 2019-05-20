import logo from '../static/logo.svg'
import React from 'react'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar color='dark' dark expand='lg'>
                    <Container>
                        <NavbarBrand href='/'><img src={logo} /></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href='#highlights' active>Destaques</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='#aboutus'>Sobre Nós</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='#services'>Serviços</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='#contact'>Contato</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <NavLink href='#' className="pr-3 d-inline-block" title="LinkedIn"><i className="fab fa-linkedin-in"></i></NavLink>
                                    <NavLink href='#' className="pr-3 d-inline-block" title="Instagram"><i className="fab fa-instagram"></i></NavLink>
                                    <NavLink href='#' className="pr-3 d-inline-block" title="Facebook"><i className="fab fa-facebook-f"></i></NavLink>
                                    <NavLink href='#' className="pr-3 d-inline-block" title="Twitter"><i className="fab fa-twitter"></i></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}
