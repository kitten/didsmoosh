import React from 'react';

import Seo from '../components/Seo';
import HeroLayout from '../components/HeroLayout';
import TextLayout from '../components/TextLayout';
import ImageLayout from '../components/ImageLayout';

const IndexPage = () => (
  <HeroLayout>
    <Seo />

    <ImageLayout>
      <b>REACT DAY BERLIN.</b>
      (Sold out)
      <br />
      Karl-Marx-Allee 131A,
      <br />
      10243 Berlin
    </ImageLayout>

    <TextLayout>
      <TextLayout.Heading>Program</TextLayout.Heading>

      <ul>
        <li>
          <b>An improvised comedy about the tragedy of programming.</b>
          <br />
          —TC Thirty-NaN.
        </li>

        <li>
          <b>Creatively coded visuals and music.</b>
          <br />
          —Sam Wray.
        </li>

        <li>
          <b>The amazing live coding man.</b>
          <br />
          —Tomasz Łakomy
        </li>

        <li>—Taz Singh.</li>
        <li>—Sara Vieira.</li>
        <li>—Michelle Guido.</li>
      </ul>
    </TextLayout>
  </HeroLayout>
);

export default IndexPage;
