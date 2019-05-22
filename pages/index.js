import Styles from '../css/style.scss'
import Fontawesome from '../css/fontawesome.scss'
import Brands from '../css/brands.scss'
import React from 'react'
import HeadPage from '../components/Head'
import Layout from '../components/Layout'
import Section from '../components/Section'

export default function Index() {
    return (
        <React.Fragment>
            <HeadPage />
            <Layout />
            <Section
                tagtitle='Destaques'
                sectitle='Educação Corporativa'
                subtitle='Texto pequeno que explique brevemente o título acima. Que tenha mais ou menos esse mesmo tamanho'
                />
            <Section
                tagtitle='A Empresa'
                sectitle='Gestão & Mais'
                subtitle='Texto pequeno que apresente brevemente a empresa. Que tenha esse mesmo tamanho'
                />
            <Section
                tagtitle='Serviços'
                sectitle='Conheça os nossos serviços'
                subtitle='Texto pequeno que apresente brevemente os serviços da empresa. Use um texto que tenha esse mesmo tamanho'
                />
            <Section
                tagtitle='Newsletter'
                sectitle='Fique sempre informado!'
                subtitle='Junte-se à nossa lista de e-mails para receber boletins informativos espontâneos'
                />
            <Section
                tagtitle='Contato'
                sectitle='Entre em contato com a gente'
                subtitle='Mande-nos uma mensagem ou faça-nos uma visita e tire suas dúvidas'
            />
        </React.Fragment>
    )
}
