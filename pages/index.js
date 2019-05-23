import Styles from '../css/style.scss'
import Fontawesome from '../css/fontawesome.scss'
import Brands from '../css/brands.scss'
import Light from '../css/light.scss'
import React from 'react'
import HeadPage from '../components/Head'
import Layout from '../components/Layout'
import Section from '../components/Section'

export default function Index() {
    return (
        <React.Fragment>
            <HeadPage />
            <Layout />
            <Section />
        </React.Fragment>
    )
}
