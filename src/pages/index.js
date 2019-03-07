import React from 'react';

import Seo from '../components/Seo';
import HeroLayout from '../components/HeroLayout';
import TextLayout from '../components/TextLayout';
import ImageLayout from '../components/ImageLayout';
import Button from '../components/Button';

const IndexPage = () => (
  <HeroLayout>
    <Seo />

    <ImageLayout>
      <b>Ticketmaster</b>
      4 Pentonville Rd,
      <br />
      London N1 9HF
    </ImageLayout>

    <TextLayout>
      <TextLayout.Heading>Program</TextLayout.Heading>

      <ul>
        <li>
          <b>Alpha. Beta. Gamer.</b>
          <br />
          —Joe Hart.
          <p>
            Unlike the rest of us, Joe is a real comedian with an Edinburgh
            Fringe show and everything. But he's also a React engineer, and he's
            putting together a new show of his greatest hits and material you've
            never seen before!
          </p>
        </li>

        <li>
          <b>Creative Coding & Music.</b>
          <br />
          —Sam Wray.
          <p>
            The one and only Sam is back to perform at Smoosh and is drawing you
            into the unique world of lo-fi sound using tools like the beloved
            Nintendo Game Boy, while we take a short break from this show's
            relentless humour.
          </p>
        </li>

        <li>
          <b>Hallelujah</b>
          <br />
          —The Postal Service Workers.
          <p>
            The shitposting supergroup formed by Sophie Koonin and Sunil Pai
            will play songs about JavaScript that will render you to tears. Sing
            along!
          </p>
        </li>

        <li>
          <b>An improvised comedy about the tragedy of programming.</b>
          <br />
          —TC Thirty-NaN.
          <p>
            Our house comedy group of Charlie, Ivan and Jani are back with
            another improvised play about JavaScript. That's the cool thing
            about improv, it's different every time!
          </p>
        </li>

        <li>
          <b>Battle Decks Round Ⅱ.</b>
          <br />
          —Taz Singh.
          <p>
            Back by popular demand, Battle Decks aka. Powerpoint Karaoke opens
            the stage to the brave & willing. Ever wanted to give a talk in
            front of 100 people with slides you've never seen before? Yeah, us
            neither, but it's absolutely hilarious and you should try.
          </p>
        </li>

        <li>
          <b>Your host.</b>
          <br />
          —Jani Eväkallio.
          <p>
            Do you ever look at the shitshow that is dev twitter and wonder,
            what's all this fuss about? Jani is here to guide you through the
            massive waste of time and energy that is twitter dot com.
          </p>
        </li>
      </ul>
      <Button href="https://www.meetup.com/formidable-london/events/259132548/">
        RSVP
      </Button>
    </TextLayout>
  </HeroLayout>
);

export default IndexPage;
