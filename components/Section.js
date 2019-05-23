import aboutus from '../static/aboutus.jpg'
import React from 'react'
import Header from './Header'
import Box from './Box'
import { Container, Row, Col } from 'reactstrap'

const Section = props => {
    return (
        <React.Fragment>
            <section className='section__wrap'>
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
            <section className='section__wrap'>
                <Container>
                    <Header
                        tagtitle='A Empresa'
                        sectitle='Gestão & Mais'
                        subtitle='Texto pequeno que apresente brevemente a empresa. Que tenha esse mesmo tamanho'
                    />
                    <Row className='align-items-center justify-content-between'>
                        <Col lg='6'>
                            <figure className='inner_box__figure'>
                                <img src={aboutus} />
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
                            <p className='mb-0'>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='section__wrap'>
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
                    <Row />
                </Container>
            </section>
            <section className='section__wrap'>
                <Container>
                    <Header
                        tagtitle='Contato'
                        sectitle='Entre em contato com a gente'
                        subtitle='Mande-nos uma mensagem ou faça-nos uma visita e tire suas dúvidas'
                    />
                    <Row />
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Section
