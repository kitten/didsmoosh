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
      <html>
        <Head>
          <meta charset="UTF-8" />
          <title>componentDidSmoosh()</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

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
