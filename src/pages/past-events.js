import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { styled } from 'linaria/react';

import ThinHeader from '../components/ThinHeader';
import PastEvent from '../components/PastEvent';

const Container = styled.div`
  width: 100%;
  background: #fff;
  flex-grow: 1;
`;

const Wrapper = styled.div`
  padding: 1.5rem;
  margin: 0 auto;
  max-width: 70rem;
  min-height: 25rem;
`;

const query = graphql`
  query {
    aprilImages: allFile(
      filter: { relativePath: { glob: "april-2018/*.jpg" } }
      sort: { fields: [name] }
    ) {
      ...PastEventImageFragment
    }
    novemberImages: allFile(
      filter: { relativePath: { glob: "november-2018/*.jpg" } }
      sort: { fields: [name] }
    ) {
      ...PastEventImageFragment
    }
  }
`;

const PastEventsPage = () => (
  <ThinHeader>
    <Container>
      <Wrapper>
        <StaticQuery
          query={query}
          render={data => {
            return (
              <Fragment>
                <PastEvent
                  title="30 November 2018"
                  location="React Day Berlin"
                  data={data.novemberImages}
                />
                <PastEvent
                  title="06 April 2018"
                  location="Ticketmaster UK"
                  data={data.aprilImages}
                />
              </Fragment>
            );
          }}
        />
      </Wrapper>
    </Container>
  </ThinHeader>
);

export default PastEventsPage;
