import styled from 'styled-components'
import { rem } from 'polished'
import Head from 'next/head'

const Wrapper = styled.div`
  min-height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  color: #0e1e25;
  padding: ${rem(60)} ${rem(20)};
  max-width: ${rem(620)};
  margin: 0 auto;
`

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
  max-width: ${rem(600)};
  margin: ${rem(45)} 0 ${rem(30)};
  padding: ${rem(16)} 0;
`

const SectionHeading = styled.h2`
  font-size: ${rem(72)};
  font-size: ${rem(76)};
  font-weight: 800;
  letter-spacing: ${rem(11)};
  margin: ${rem(22)} 0;
  text-align: center;
  text-transform: uppercase;
`

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  align-items: flex-start;
  margin: 30px 0;
`

const Body = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.7;
  letter-spacing: 0.88px;
  margin: 15px 0;
`

const BoldBody = styled(Body)`
  text-transform: uppercase;
  font-weight: 800;
`

const Link = styled.a.attrs({
  target: '_blank',
  rel: 'noopener'
})`
  cursor: pointer;
  text-decoration: none;
  color: #aa266f;
`

const BodyLinks = styled(Body)`
  padding-left: 14px;
  line-height: 2;
  border-left: 2px solid #aa266f;
`

export default () => (
  <Wrapper>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta property="og:title" content= "Code of Conduct — componentDidSmoosh" />
      <title>Code of Conduct — componentDidSmoosh</title>
    </Head>

    <Content>
      <Section>
        <SectionHeading>Code of Conduct</SectionHeading>
        <SectionContent>
          <Body>
            All guests, speakers, and volunteers at the componentDidSmoosh events are required to agree with the following code of conduct.
            Organizers will enforce this code throughout the events.
          </Body>
          <Body>
            Because this is a comedy event, the tone and content of the presentations will differ from your usual tech event.
            Strong language, adult themes and dark humour may be presented.
            However, we the event organizers, are committed to providing a safe and inclusive space for our audience,
            and aim to create an environment of fun, love, kindness and respect for all our fellow human beings.
          </Body>

          <BoldBody>
            The Quick Version
          </BoldBody>

          <Body>
            componentDidSmoosh is dedicated to providing a harassment-free experience for everyone, regardless of gender,
            gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity,
            or religion (or lack thereof).
          </Body>

          <Body>
            We do not tolerate harassment of event participants in any form.
            Event participants violating these rules may be sanctioned or expelled from the event
            at the discretion of the event organisers.
          </Body>

          <BoldBody>
            The Less Quick Version
          </BoldBody>

          <Body>
            Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation,
            disability, physical appearance, body size, race, ethnicity, religion, deliberate intimidation, stalking, following,
            harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact,
            and unwelcome sexual attention.
          </Body>
          <Body>
            Participants asked to stop any harassing behavior are expected to comply immediately.
          </Body>
          <Body>
            If a participant engages in harassing behavior, the event organizers may take any action they deem appropriate,
            including warning the offender or expulsion from the event(s).
          </Body>
          <Body>
            If you are being harassed, notice that someone else is being harassed, or have any other concerns,
            please contact a member of event staff immediately. Event staff will be introduced at the beginning
            of the event and may be contacted throughout the duration of the event and afterwards via Twitter DMs:
          </Body>
          <BodyLinks>
            <Link href="https://twitter.com/jevakallio">Jäni Evakalliö</Link><br />
            <Link href="https://twitter.com/oliverturner">Öliver Türner</Link><br />
            <Link href="https://twitter.com/_philpl">Phïl Pluckthün</Link>
          </BodyLinks>
          <Body>
            We expect participants to follow these rules during and after the event(s), at the event venue(s), at event-related
            social events—such as after-parties—and on social media.
          </Body>
        </SectionContent>
      </Section>
    </Content>
  </Wrapper>
);
