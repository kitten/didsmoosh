import styled from "styled-components";
import { rem } from "polished";

import Hero from "../components/Hero";
import Button from "../components/Button";
import Decoration from "../components/decoration";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

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
`;

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-image: url("/static/decoration.png");
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
  align-items: ${p => (p.center ? "center" : "flex-end")};
  text-align: ${p => (p.center ? "center" : "right")};
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

const Link = styled.a`
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
  }
`;

export default () => (
  <Wrapper>
    <Hero />
    <Content>
      <Description>
        <B>componentDidSmoosh</B> is a JavaScript comedy night like never seen
        before, bringing London’s greatest experts of developer humour on stage
        to make you laugh and cry.
      </Description>

      <Button href="https://www.meetup.com/formidable-london/events/248799751/">
        Join the fun
      </Button>

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
            —<Link href="https://twitter.com/ken_wheeler">Ken Wheeler</Link>{" "}
            (remote)
          </Body>
        </SectionContent>
      </Section>

      <Button href="https://www.meetup.com/formidable-london/events/248799751/">
        Sign the heck up
      </Button>
    </Content>
  </Wrapper>
);