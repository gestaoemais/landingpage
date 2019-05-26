import React from 'react'
import Header from './Header'
import Box from './Box'
import Forms from './Form'
import { Container, Row, Col } from 'reactstrap'

const Section = props => {
    return (
        <React.Fragment>
            <section id='aboutus' className='section__wrap'>
                <Container>
                    <Header
                        tagtitle='A Empresa'
                        sectitle='Gestão & Mais'
                        subtitle='Texto pequeno que apresente brevemente a empresa. Que tenha esse mesmo tamanho'
                    />
                    <Row className='align-items-center justify-content-between mb-lg-100'>
                        <Col lg='6'>
                            <figure className='inner_box__figure'>
                                <img
                                    src={require('../static/aboutus.jpg?inline')}
                                    alt='Sobre a nossa história'
                                />
                            </figure>
                        </Col>
                        <Col lg='5'>
                            <h4 className='inner_box__title'>
                                Conheça a nossa história
                            </h4>
                            <p>
                                Texto pequeno que explique com clareza o título
                                acima. Que tenha mais ou menos esse mesmo
                                tamanho e consiga ser objetivo. Sed ut
                                perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                            </p>
                        </Col>
                    </Row>
                    <Row className='justify-content-between'>
                        <Col md='3'>
                            <h4 className='inner_box__title'>Missão</h4>
                            <p>
                                Oferecer soluções para a área da gestão de
                                empresas que atuam nos diferentes segmentos de
                                mercado, estimulando o empreendedorismo prezando
                                pela qualidade, confiabilidade e competitividade
                            </p>
                        </Col>
                        <Col md='3'>
                            <h4 className='inner_box__title'>Valores</h4>
                            <ul className='pl-3'>
                                <li>Qualidade</li>
                                <li>Transparência</li>
                                <li>Iniciativa</li>
                                <li>Determinação</li>
                                <li>Inovação</li>
                                <li>Responsabilidade Social</li>
                            </ul>
                        </Col>
                        <Col md='3'>
                            <h4 className='inner_box__title'>Visão</h4>
                            <p className='mb-0'>
                                Tornar-se uma escola de negócios, atuando de
                                forma ampla na área de educação corporativa,
                                buscando ser referência no estado do Piauí em um
                                prazo de 10 anos.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id='highlights' className='section__wrap'>
                <Container>
                    <Header
                        tagtitle='Destaques'
                        sectitle='Educação Corporativa'
                        subtitle='Texto pequeno que explique brevemente o título acima. Que tenha mais ou menos esse mesmo tamanho'
                    />
                    <Row>
                        <Box
                            icon='book-open'
                            boxtitle='Treinamentos'
                            boxtext='Texto pequeno que explique com clareza o título acima. Que tenha mais ou menos esse mesmo tamanho e consiga ser objetivo.'
                        />
                        <Box
                            icon='file-certificate'
                            boxtitle='Pós-graduações'
                            boxtext='Texto pequeno que explique com clareza o título acima. Que tenha mais ou menos esse mesmo tamanho e consiga ser objetivo.'
                        />
                        <Box
                            icon='pencil-ruler'
                            boxtitle='Cursos Técnicos'
                            boxtext='Texto pequeno que explique com clareza o título acima. Que tenha mais ou menos esse mesmo tamanho e consiga ser objetivo.'
                        />
                        <Box
                            icon='tools'
                            boxtitle='Cursos Profissionalizantes'
                            boxtext='Texto pequeno que explique com clareza o título acima. Que tenha esse mesmo tamanho.'
                        />
                    </Row>
                </Container>
            </section>

            <section id='services' className='section__wrap'>
                <Container>
                    <Header
                        tagtitle='Serviços'
                        sectitle='Conheça os nossos serviços'
                        subtitle='Texto pequeno que apresente brevemente os serviços da empresa. Use um texto que tenha esse mesmo tamanho'
                    />
                    <Row>
                        <Box
                            icon='list-alt'
                            boxtitle='RH Service'
                            boxtext='Serviço que cuida do operacional relacionado ao processo de recrutamento e seleção, assim como outras práticas de RH.'
                        />
                        <Box
                            icon='passport'
                            boxtitle='Turismo de Negócios'
                            boxtext='Compreende o projeto da  Missão-Executiva que tem como objetivo conhecer modelos de gestão utilizados por grandes empresas.'
                        />
                        <Box
                            icon='building'
                            boxtitle='Locação de Sala'
                            boxtext='Salas que oferecem toda estrutura para atividades de treinamento corporativo, seleção, cursos e realização de entrevistas.'
                        />
                        <Box
                            icon='chart-network'
                            boxtitle='Networking'
                            boxtext='Texto pequeno que explique com clareza o título acima. Que tenha mais ou menos esse mesmo tamanho e consiga ser objetivo.'
                        />
                    </Row>
                </Container>
            </section>
            <section className='section__wrap'>
                <Container>
                    <Header
                        tagtitle='Newsletter'
                        sectitle='Fique sempre informado!'
                        subtitle='Junte-se à nossa lista de e-mails para receber boletins informativos espontâneos'
                    />
                    <Forms />
                </Container>
            </section>
            <section id='contact' className='section__wrap'>
                <Container>
                    <Header
                        tagtitle='Contato'
                        sectitle='Entre em contato com a gente'
                        subtitle='Mande-nos uma mensagem ou faça-nos uma visita e tire suas dúvidas'
                    />
                    <Row className='justify-content-between'>
                        <Col md='7'>
                            <div className='embed-responsive embed-responsive-4by3 mb-sm-100'>
                                <iframe
                                    className='embed-responsive-item'
                                    width='100%'
                                    height='100%'
                                    id='gmap_canvas'
                                    src='https://maps.google.com/maps?q=Avenida%20Campos%20Sales%20n%C2%B0%201625&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed'
                                    frameBorder='0'
                                    scrolling='no'
                                    marginHeight='0'
                                    marginWidth='0'
                                />
                            </div>
                        </Col>
                        <Col md='4'>
                            <h5>Endereço</h5>
                            <p>Av. Campos Sales, 1625, Teresina - PI</p>
                            <h5>E-mail</h5>
                            <p><a href="mailto:gestaoemais@gmail.com"  className='linkApp' title='Nosso e-mail'>gestaoemais@gmail.com</a></p>
                            <h5>Telefone</h5>
                            <p><a href="tel:8632215524" className='linkApp' title='Nosso telefone'>(86) 3221-5524</a></p>
                            <h5>WhatsApp</h5>
                            <p className='small_text'>Clique para entrar em contato:</p>
                            <p><a href="https://wa.me/5586994137903?text=I'm%20inquiring%20about%20the%20apartment%20listing"  className='linkApp' title='Nosso WhatsApp'>(86) 99413-7903</a></p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Section
