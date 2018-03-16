import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    src: local('Source Sans Pro SemiBold'), local('SourceSansPro-SemiBold'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu3cOWxw.woff2) format('woff2');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 800;
    src: local('Source Sans Pro Black'), local('SourceSansPro-Black'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwlxdu3cOWxw.woff2) format('woff2');
  }

  body, html {
    margin: 0;
    font-family: 'Source Sans Pro', 'source-sans-pro', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    html, body { font-size: 14px; }
  }

  @media (max-width: 600px) {
    html, body { font-size: calc(100vw * 0.025); }
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <title>componentDidSmoosh()</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://smoosh.fun/static/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://smoosh.fun/static/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://smoosh.fun/static/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://smoosh.fun/static/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://smoosh.fun/static/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://smoosh.fun/static/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://smoosh.fun/static/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://smoosh.fun/static/apple-touch-icon-152x152.png" />
          <link rel="icon" type="image/png" href="https://smoosh.fun/static/favicon-196x196.png" sizes="196x196" />
          <link rel="icon" type="image/png" href="https://smoosh.fun/static/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="https://smoosh.fun/static/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="https://smoosh.fun/static/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="https://smoosh.fun/static/favicon-128.png" sizes="128x128" />
          <meta name="application-name" content="smoosh.fun"/>
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="https://smoosh.fun/static/mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="https://smoosh.fun/static/mstile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="https://smoosh.fun/static/mstile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="https://smoosh.fun/static/mstile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="https://smoosh.fun/static/mstile-310x310.png" />

          <meta name="description" content="componentDidSmoosh is a JavaScript comedy night like never seen before, bringing London’s greatest experts of developer humour on stage to make you laugh and cry." />
          <meta name="twitter:card" content="summary" />
          <meta property="og:title" content= "componentDidSmoosh — A JavaScript comedy night"/>
          <meta property="og:description" content="componentDidSmoosh is a JavaScript comedy night like never seen before, bringing London’s greatest experts of developer humour on stage to make you laugh and cry." />
          <meta property="og:type" content="event"/>
          <meta property="og:image" content="https://smoosh.fun/static/banner.jpg" />
          <meta property="og:url" content="https://smoosh.fun" />
          <meta property="og:fn" content="Ticketmaster UK" />
          <meta property="og:street-address" content="4 Pentonville Rd"/>
          <meta property="og:locality" content="London"/>
          <meta property="og:postal-code" content="N1 9HF" />
          <meta property="og:country-name" content="UK"/>
          <meta property="og:start-time" content="2010-04-06T18:00"/>

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
