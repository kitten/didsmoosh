import styled from 'styled-components';
import { rem } from 'polished';

import Hero from '../components/Hero';
import Button from '../components/Button';
import Decoration from '../components/decoration';
import Arrow from '../components/arrow';

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  color: #0e1e25;
  padding: ${rem(60)} ${rem(20)};
  max-width: ${rem(620)};
  margin: 0 auto;
`;

const B = styled.b`
  font-weight: 800;
`;

const Description = styled.p`
  font-size: ${rem(28)};
  line-height: ${rem(36)};
  font-weight: 600;
  padding: ${rem(40)} 0;
  text-align: center;
  color: #0e1e25;
`;

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-image: url('/static/decoration.png');
  background-size: ${rem(100)} ${rem(400)};

  color: #0e1e25;
  min-height: ${rem(400)};
  max-width: ${rem(455)};
  margin: ${rem(45)} 0 ${rem(30)};
  padding: ${rem(16)} 0;
`;

const SectionHeading = styled.h2`
  font-size: ${rem(72)};
  font-size: ${rem(76)};
  font-weight: 800;
  letter-spacing: ${rem(11)};
  margin: ${rem(22)} 0;
  text-align: center;
  text-transform: uppercase;
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${p => (p.center ? 'center' : 'flex-end')};
  text-align: ${p => (p.center ? 'center' : 'right')};
  margin: ${rem(30)} 0;
`;

const Body = styled.h3`
  font-weight: 600;
  font-size: ${rem(28)};
  line-height: ${rem(34)};
  letter-spacing: ${rem(0.88)};
`;

const BoldBody = styled(Body)`
  text-transform: uppercase;
  font-weight: 800;
`;

const LinkBody = styled.div`
  margin-bottom: ${rem(40)};
`

const ArrowIcon = styled(Arrow)`
  position: relative;
  top: ${rem(3)};

  display: inline-block;
  vertical-align: baseline;
  margin-left: ${rem(12)};
  width: ${rem(14)};
  height: ${rem(21)};
`

const PageLink = styled.a.attrs({
  target: p => !p.external ? undefined : '_blank',
  rel: p => !p.external ? undefined : 'noopener'
})`
  display: block;
  margin-bottom: ${rem(9)};
  cursor: pointer;
  text-decoration: none;
  color: #aa266f;
  font-size: ${rem(24)};
  font-weight: 600;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`

const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener'
})`
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`

export default () => (
  <Wrapper>
    <Hero tagline="Thanks for coming" />
    <Content>
      <Description>
        <B>componentDidSmoosh</B> is a JavaScript comedy night like never seen
        before, bringing London’s greatest experts of developer humour on stage
        to make you laugh and cry.
      </Description>

      <Button internal href="/donate">
        Donate
      </Button>

      <LinkBody>
        <PageLink href="/coc">
          Code of Conduct
          <ArrowIcon />
        </PageLink>
        <PageLink external href="https://www.meetup.com/formidable-london/events/248799751/">
          Meetup
          <ArrowIcon />
        </PageLink>
      </LinkBody>

      <Section>
        <SectionHeading>Location</SectionHeading>
        <SectionContent center>
          <BoldBody>Ticketmaster UK</BoldBody>
          <Body>
            4 Pentonville Rd,<br />
            London N1 9HF<br />
            6:00 PM – 10:00 PM
          </Body>
        </SectionContent>
      </Section>

      <Section>
        <SectionHeading>Program</SectionHeading>
        <SectionContent>
          <BoldBody>Battle Decks.</BoldBody>
          <Body>
            —<Link href="https://twitter.com/tazsingh">Taz Singh</Link>
          </Body>
        </SectionContent>
        <SectionContent>
          <BoldBody>Fuck this thing in particular.</BoldBody>
          <Body>
            —<Link href="https://twitter.com/NikkitaFTW">Sara Vieira</Link>
          </Body>
        </SectionContent>
        <SectionContent>
          <BoldBody>Feeling the blues.</BoldBody>
          <Body>
            —<Link href="https://twitter.com/threepointone">Sunil Pai</Link>
          </Body>
        </SectionContent>
        <SectionContent>
          <BoldBody>JavaScript amirite?</BoldBody>
          <Body>
            —<Link href="https://twitter.com/jevakallio">Jani Evakallio</Link>
          </Body>
        </SectionContent>
        <SectionContent>
          <BoldBody>
            An improvised comedy about the tragedy of programming.
          </BoldBody>
          <Body>—TC Thirty-NaN</Body>
        </SectionContent>
        <SectionContent>
          <BoldBody>Beats by Ken.</BoldBody>
          <Body>
            —<Link href="https://twitter.com/ken_wheeler">Ken Wheeler</Link>{' '}
            (remote)
          </Body>
        </SectionContent>
      </Section>

      <Button internal href="/donate">
        Donate
      </Button>
    </Content>
  </Wrapper>
);
