import Styles from '../css/style.scss'
import Fontawesome from '../css/fontawesome.scss'
import Brands from '../css/brands.scss'
import Light from '../css/light.scss'
import React from 'react'
import Head from '../components/Head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Footer from '../components/Footer'

export default function Index() {
    return (
        <React.Fragment>
            <Head />
            <Navbar />
            <Hero />
            <Section />
            <Footer />
        </React.Fragment>
    )
}
