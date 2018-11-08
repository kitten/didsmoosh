import React from 'react';

import Seo from '../components/Seo';
import ThinHeader from '../components/ThinHeader';
import TextLayout from '../components/TextLayout';

const CocPage = () => (
  <ThinHeader>
    <Seo title="Code of Conduct" />

    <TextLayout>
      <TextLayout.Heading>Code of Conduct</TextLayout.Heading>

      <p>
        All guests, speakers, and volunteers at the componentDidSmoosh events
        are required to agree with the following code of conduct. Organizers
        will enforce this code throughout the events.
      </p>
      <p>
        Because this is a comedy event, the tone and content of the
        presentations will differ from your usual tech event. Strong language,
        adult themes and dark humour may be presented. However, we the event
        organizers, are committed to providing a safe and inclusive space for
        our audience, and aim to create an environment of fun, love, kindness
        and respect for all our fellow human beings.
      </p>

      <h4>The Quick Version</h4>

      <p>
        componentDidSmoosh is dedicated to providing a harassment-free
        experience for everyone, regardless of gender, gender identity and
        expression, age, sexual orientation, disability, physical appearance,
        body size, race, ethnicity, or religion (or lack thereof).
      </p>

      <p>
        We do not tolerate harassment of event participants in any form. Event
        participants violating these rules may be sanctioned or expelled from
        the event at the discretion of the event organisers.
      </p>

      <h4>The Less Quick Version</h4>

      <p>
        Harassment includes offensive verbal comments related to gender, gender
        identity and expression, age, sexual orientation, disability, physical
        appearance, body size, race, ethnicity, religion, deliberate
        intimidation, stalking, following, harassing photography or recording,
        sustained disruption of talks or other events, inappropriate physical
        contact, and unwelcome sexual attention.
      </p>
      <p>
        Participants asked to stop any harassing behavior are expected to comply
        immediately.
      </p>
      <p>
        If a participant engages in harassing behavior, the event organizers may
        take any action they deem appropriate, including warning the offender or
        expulsion from the event(s).
      </p>
      <p>
        If you are being harassed, notice that someone else is being harassed,
        or have any other concerns, please contact a member of event staff
        immediately. Event staff will be introduced at the beginning of the
        event and may be contacted throughout the duration of the event and
        afterwards via Twitter DMs:
      </p>

      <ul>
        <li>
          @jevakallio
          <br />
          —Jani Eväkallio
        </li>
        <li>
          @tazsingh
          <br />
          —Taz Singh
        </li>
        <li>
          @_philpl
          <br />
          —Phil Plückthun
        </li>
      </ul>

      <p>
        We expect participants to follow these rules during and after the
        event(s), at the event venue(s), at event-related social events—such as
        after-parties—and on social media.
      </p>
    </TextLayout>
  </ThinHeader>
);

export default CocPage;
