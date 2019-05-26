import React from 'react'
import Head from 'next/head'

function HeadPage() {
    return (
        <Head>
            <meta charSet='utf-8' />
            <meta httpEquiv='x-ua-compatible' content='ie=edge' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1, shrink-to-fit=no'
            />
            <meta name='keywords' content='true' />
            <title>Gestão & Mais</title>
            <meta name='description' content='Agência de negócios' />
            <link
                rel='canonical'
                href='https://coding.laurielmesquita.now.sh/'
            />
            <meta name='robots' content='index, follow' />
            {/* <!-- Twitter --> */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta
                name='twitter:url'
                content='https://coding.laurielmesquita.now.sh/'
            />
            <meta name='twitter:title' content='Gestão & Mais' />
            <meta name='twitter:description' content='Agência de negócios' />
            <meta
                name='twitter:image:src'
                content='https://coding.laurielmesquita.now.sh/static/social_image.jpg'
            />
            {/* <!-- Open Graph general --> */}
            <meta
                property='og:url'
                content='https://coding.laurielmesquita.now.sh/'
            />
            <meta property='og:title' content='Gestão & Mais' />
            <meta property='og:description' content='Agência de negócios' />
            <meta
                property='og:image'
                content='https://coding.laurielmesquita.now.sh/static/social_image.jpg'
            />
            <meta property='og:image:type' content='image/jpeg' />
            <meta property='og:image:width' content='1200' />
            <meta property='og:image:height' content='632' />
            <meta property='og:locale' content='pt_BR' />
            <meta property='og:type' content='website' />
            {/* <!-- Icons --> */}
            <link
                rel='icon'
                type='image/png'
                href='https://coding.laurielmesquita.now.sh/static/favicon.png'
            />
            {/* <!-- Scripts --> */}
            <script src='https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js' />
            <script>var scroll = new SmoothScroll('a[href*="#"]');</script>
        </Head>
    )
}

export default HeadPage
