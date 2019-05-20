import Styles from '../css/style.scss'
import Fontawesome from '../css/fontawesome.scss'
import Brands from '../css/brands.scss'
import React from 'react'
import HeadPage from '../components/Head'
import Layout from '../components/Layout'

export default function Index() {
    return (
        <React.Fragment>
            <HeadPage />
            <Layout />
        </React.Fragment>
    )
}
