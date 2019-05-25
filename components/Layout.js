import React from 'react'
import Hero from '../components/Hero'
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
                        <NavbarBrand href='/'><img src={require('../static/logo.svg?inline')} /></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href='#aboutus' active>Sobre Nós</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='#highlights'>Destaques</NavLink>
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
                                    <NavLink href='#' className="pr-3 d-inline-block" target='_blank' rel='noopener' title="LinkedIn"><i className="fab fa-linkedin-in"></i></NavLink>
                                    <NavLink href='https://www.instagram.com/gestao.e.mais/' className="pr-3 d-inline-block" target='_blank' rel='noopener' title="Instagram"><i className="fab fa-instagram"></i></NavLink>
                                    <NavLink href='https://www.facebook.com/Gestaoemais/' target='_blank' rel='noopener' className="pr-3 d-inline-block" title="Facebook"><i className="fab fa-facebook-f"></i></NavLink>
                                    <NavLink href='#' className="pr-3 d-inline-block" target='_blank' rel='noopener' title="Twitter"><i className="fab fa-twitter"></i></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Hero />
            </React.Fragment>
        )
    }
}
