import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
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
          <link rel="stylesheet" href="https://use.typekit.net/sis5bcz.css" />

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
