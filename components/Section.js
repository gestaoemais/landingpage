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
                                A Gestão & Mais atua há mais de 10 anos no
                                mercado, onde oferece um leque de ações pras
                                empresas que estão mercado, assessorando as
                                mesmas a se desenvolverem através de nossos
                                produtos e serviços. Dentre eles, enfatizamos os
                                nossos serviços de Treinamentos, Recrutamento e
                                Seleção, Eventos , Locação de salas para
                                reuniões e palestras, Missão-Executivas , dentre
                                outras ações.
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
                                <li>Garra</li>
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
                            modalContent='Teste de conteúdo'
                        />
                        <Box
                            icon='file-certificate'
                            boxtitle='Pós-graduações'
                            boxtext='Texto pequeno que explique com clareza o título acima. Que tenha mais ou menos esse mesmo tamanho e consiga ser objetivo.'
                            modalContent='Teste de conteúdo'
                        />
                        <Box
                            icon='pencil-ruler'
                            boxtitle='Cursos Técnicos'
                            boxtext='Texto pequeno que explique com clareza o título acima. Que tenha mais ou menos esse mesmo tamanho e consiga ser objetivo.'
                            modalContent='Teste de conteúdo'
                        />
                        <Box
                            icon='tools'
                            boxtitle='Cursos Profissionalizantes'
                            boxtext='Texto pequeno que explique com clareza o título acima. Que tenha esse mesmo tamanho.'
                            modalContent='Teste de conteúdo'
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
                            modalInnerTitle_1='O que é o RH SERVICE GESTÃO & MAIS?'
                            modalContent_1='O RH SERVICE é um dos serviços oferecidos pela Gestão & Mais, que cuida da parte operacional relacionada ao processo de Recrutamento & Seleção, assim como outras práticas de RH,  identificando novos talentos para sua empresa e desenvolvendo os existentes... São analisados os perfis, comparados os currículos e as habilitações dos candidatos e selecionados os melhores funcionários para integrar os quadros da sua empresa, além de programas de treinamentos , pesquisa de clima organizacional, dentre outras ações.'
                            modalInnerTitle_2='Quais suas vantagens e desvantagens'
                            modalContent_2='A terceirização surge como uma opção de redução custos, economia de espaços e otimização das operações, tornando-as mais ágeis.
                            Os serviços terceirizados geralmente implicam mais agilidade e eficiência.
                            Você só pagará pelos serviços contratados durante o tempo em que forem necessários.
                            Serviço especializado e de qualidade, os profissionais contratados terão capacidade garantida.
                            Ficar livre de receber currículos.
                            Através da terceirização, uma empresa vai evitar todas as dores de cabeça associadas com recrutamento e seleção para uma função específica dentro da empresa gerando menos preocupações para o gestor.
                            Foco nas atividades centrais da empresa.'
                            modalInnerTitle_3='Dentre as nossas ações , destacamos as seguintes:'
                            modalInnerTitle_4='RECRUTAMENTO'
                            modalContent_4='Compreende todos os procedimentos utilizados pelas empresas para divulgar suas vagas e atrair candidatos potencialmente qualificados a ocupar um cargo, ou seja, é a maneira como as empresas comunicam e divulgam no mercado suas ofertas de oportunidade de emprego.'
                            modalInnerTitle_5='SELEÇÃO'
                            modalContent_5='É o processo sistematizado de escolha entre candidatos que foram recrutados. A seleção visa prever qual deles terá o melhor desempenho na vaga em questão para fins de contratação.'
                        />
                        <Box
                            icon='passport'
                            boxtitle='Turismo de Negócios'
                            boxtext='Compreende o projeto da  Missão-Executiva que tem como objetivo conhecer modelos de gestão utilizados por grandes empresas.'
                            modalContent='Teste de conteúdo'
                            modalContent_1='O turismo de negócios compreende o projeto da  Missão-Executiva que tem como objetivo conhecer modelos de gestão utilizados por grandes empresas, nacional e multinacional e esta será a 11a edição organizada pela Gestão & Mais, onde você terá uma EXPERIÊNCIA incrível de Aprendizado  na Prática !!'
                            modalContent_2='Em outras edições, visitamos empresas em São Paulo e em Curitiba, como Natura, Bosch, General Motors (Chevrolet), Magazine Luiza, Porto de Santos, Nestlé, Suzano Celulose, Bolsa de Valores de São Paulo, Heineken, Wirlpool, Itautec, World Trade Center, Fabrica do Boticário, Fabrica Malwee, Fabrica da Tigre e o Porto de Itajaí, Fabrica da Toyota, Loja do Futuro Oministore, além outras.'
                            modalContent_3='Nesta edição de 2019, a cidade de destino será São Paulo – SP e aberto a todos que tenham interesse em ter essa experiência na sua carreira e na sua Vida.'
                        />
                        <Box
                            icon='building'
                            boxtitle='Locação de Sala'
                            boxtext='Salas que oferecem toda estrutura para atividades de treinamento corporativo, seleção, cursos e realização de entrevistas.'
                            modalContent='Teste de conteúdo'
                            modalContent_1='Para você que deseja salas para atividades de Treinamentos corporativos, seleção, cursos e realização de entrevistas, conheça as nossas salas que oferecem toda uma estrutura para essas ações. Consulte a nossa equipe de atendimento  que sempre está a sua disposição e bons negócios!'
                        />
                        <Box
                            icon='chart-network'
                            boxtitle='Eventos Corporativos'
                            boxtext='Realizamos vários eventos corporativos como forma de fomentar e de atualizar os participantes.'
                            modalContent_1='Realizamos vários eventos corporativos como forma de fomentar de atualizar os participante e intensificar o  networking entre os profissionais e empresas, como o Café Empresarial,  confraria de RH, confraria de Markentin e Confraria de Empreendedorismo, Expo-Vagas, Experience, Office trade , além de outros. Acompanhe as nossas redes sociais e fique por dentro!'
                        />
                    </Row>
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
                            <p>
                                <a
                                    href='mailto:gestaoemais@gmail.com'
                                    className='linkApp'
                                    title='Nosso e-mail'
                                >
                                    gestaoemais@gmail.com
                                </a>
                            </p>
                            <h5>Telefone</h5>
                            <p>
                                <a
                                    href='tel:8632215524'
                                    className='linkApp'
                                    title='Nosso telefone'
                                >
                                    (86) 3221-5524
                                </a>
                            </p>
                            <h5>WhatsApp</h5>
                            <p className='small_text'>
                                Clique para entrar em contato:
                            </p>
                            <p>
                                <a
                                    href="https://wa.me/5586994137903?text=I'm%20inquiring%20about%20the%20apartment%20listing"
                                    className='linkApp'
                                    title='Nosso WhatsApp'
                                >
                                    (86) 99413-7903
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Section
