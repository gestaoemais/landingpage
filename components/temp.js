            <section className='section__wrap'>
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
                    <Row>
                        <Forms />
                    </Row>
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