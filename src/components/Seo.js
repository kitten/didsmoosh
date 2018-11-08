import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const files = [
  { name: 'icon57', size: '57x57' },
  { name: 'icon60', size: '60x60' },
  { name: 'icon72', size: '72x72' },
  { name: 'icon76', size: '76x76' },
  { name: 'icon114', size: '114x114' },
  { name: 'icon120', size: '120x120' },
  { name: 'icon144', size: '144x144' },
  { name: 'icon152', size: '152x152' },
  { name: 'icon180', size: '180x180' },
];

const query = graphql`
  query {
    banner: file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fixed(width: 1120) {
          src
        }
      }
    }
    favicon: file(relativePath: { eq: "favicon.png" }) {
      childImageSharp {
        banner: fixed(width: 57, height: 57) {
          src
        }
        icon57: fixed(width: 57, height: 57) {
          src
        }
        icon60: fixed(width: 60, height: 60) {
          src
        }
        icon72: fixed(width: 72, height: 72) {
          src
        }
        icon76: fixed(width: 76, height: 76) {
          src
        }
        icon114: fixed(width: 114, height: 114) {
          src
        }
        icon120: fixed(width: 120, height: 120) {
          src
        }
        icon144: fixed(width: 144, height: 144) {
          src
        }
        icon152: fixed(width: 152, height: 152) {
          src
        }
        icon180: fixed(width: 180, height: 180) {
          src
        }
      }
    }
  }
`;

const description =
  'componentDidSmoosh is a comedy night for JavaScript nerds. We bring ' +
  'together Europe’s greatest experts of developer humour on stage to make' +
  'you laugh and cry. This is not a party you’ll want to miss.';

const Seo = ({ title }) => (
  <StaticQuery
    query={query}
    render={data => (
      <Helmet>
        <html lang="en" />

        <title>
          {title ? `${title} — ` : ''}
          {'componentDidSmoosh'}
        </title>

        <meta name="application-name" content="smoosh.fun" />
        <meta name="description" content={description} />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="twitter:card" content="summary" />

        <meta
          property="og:title"
          content="componentDidSmoosh — A JavaScript comedy night"
        />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="event" />
        <meta property="og:url" content="https://smoosh.fun" />
        <meta property="og:fn" content="React Day Berlin" />
        <meta property="og:street-address" content="Karl-Marx-Allee 131A" />
        <meta property="og:locality" content="Berlin" />
        <meta property="og:postal-code" content="10243" />
        <meta property="og:country-name" content="DE" />
        <meta property="og:start-time" content="2010-11-30T18:00" />

        <meta
          property="og:image"
          content={data.banner.childImageSharp.fixed.src}
        />

        {files.map(({ name, size }) => (
          <link
            rel="apple-touch-icon"
            key={name}
            sizes={size}
            href={data.favicon.childImageSharp[name].src}
          />
        ))}
      </Helmet>
    )}
  />
);

export default Seo;
