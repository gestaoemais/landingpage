import React from 'react'
import Head from 'next/head'

function HeadPage() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="keywords" content="true" />
      <title>Gestão & Mais - Agência de Negócios</title>
      <meta
        name="description"
        content="Com mais de 10 anos no mercado, oferecemos soluções para gestão empresarial, assessorando empresas a se desenvolverem no mercado de forma competitiva."
      />
      <link rel="canonical" href="https://gestaoemais.com.br/" />
      <meta name="robots" content="index, follow" />
      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://gestaoemais.com.br/" />
      <meta
        name="twitter:title"
        content="Gestão & Mais - Agência de Negócios"
      />
      <meta
        name="twitter:description"
        content="Com mais de 10 anos no mercado, oferecemos soluções para gestão empresarial, assessorando empresas a se desenvolverem no mercado de forma competitiva."
      />
      <meta
        name="twitter:image:src"
        content="https://gestaoemais.com.br/static/social_image.jpg"
      />
      {/* <!-- Open Graph general --> */}
      <meta property="og:url" content="https://gestaoemais.com.br/" />
      <meta property="og:title" content="Gestão & Mais - Agência de Negócios" />
      <meta
        property="og:description"
        content="Com mais de 10 anos no mercado, oferecemos soluções para gestão empresarial, assessorando empresas a se desenvolverem no mercado de forma competitiva."
      />
      <meta
        property="og:image"
        content="https://gestaoemais.com.br/static/social_image.jpg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="632" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      {/* <!-- Icons --> */}
      <link
        rel="icon"
        type="image/png"
        href="https://gestaoemais.com.br/static/favicon.png"
      />
      {/* <!-- Scripts --> */}
      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js" />
      <script>var scroll = new SmoothScroll('a[href*="#"]');</script>
    </Head>
  )
}

export default HeadPage
