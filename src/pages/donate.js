import React, {
  useRef,
  useCallback,
  useState,
  useEffect,
  Fragment,
} from 'react';
import { styled } from 'linaria/react';

import { Elements, StripeProvider } from 'react-stripe-elements';

import Seo from '../components/Seo';
import Input from '../components/Input';
import ThinHeader from '../components/ThinHeader';
import PaymentRequest from '../components/PaymentRequest';
import CardInput from '../components/CardInput';
import { BlackSpacer } from '../components/HeroLayout/common';
import TextLayout from '../components/TextLayout';
import Confetti from '../components/Confetti';
import LoadingWrapper from '../components/LoadingWrapper';
import { Clap, ThinkingFace } from '../components/Icons';

const ClapIcon = styled(Clap)`
  width: 6rem;
  height: 6rem;
  margin: 1rem 0;
`;

const ThinkingIcon = styled(ThinkingFace)`
  width: 6rem;
  height: 6rem;
  margin: 1rem 0;
`;

const Container = styled.div`
  width: 100%;
  background: #fff;
  margin: 0 auto;
  max-width: 70rem;
`;

const Wrapper = styled.div`
  padding: 1.5rem;
  min-height: 25rem;
  max-width: 40rem;
`;

const Heading = styled.h3`
  font-weight: 600;
  letter-spacing: 0.1rem;
  line-height: 3.9rem;
  font-size: 3.75rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    line-height: 1.25;
  }
`;

const WithStripe = ({ children }) => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    const onLoad = () =>
      setStripe(window.Stripe('pk_live_b75NLmsiCGT6UZ5Q7hnZj3Gn'));
    if (window.Stripe) {
      onLoad();
      return;
    }

    const script = document.querySelector('#stripe-script');
    script.addEventListener('load', onLoad);
    return () => script.removeEventListener('load', onLoad);
  }, []);

  return <StripeProvider stripe={stripe}>{children}</StripeProvider>;
};

const processPayment = ({ token, amount }) => {
  return fetch('https://smoosh-api.kitten.sh/donation', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token,
      amount,
    }),
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res);
      }

      return res.json();
    })
    .then(res => {
      if (Array.isArray(res.errors) && res.errors.length > 0) {
        return Promise.reject(res.errors);
      } else if (!res.data.ok) {
        return Promise.reject(res);
      }

      return Promise.resolve(res);
    });
};

const Form = ({ showSuccess, showError, showLoading }) => {
  const [amount, setAmount] = useState(15);
  const activeRef = useRef(false);

  const onChangeAmount = useCallback(
    value => {
      const x = typeof value === 'string' ? parseFloat(value) : value;
      const amount = Math.max(1, Math.min(400, Math.floor(x)));
      setAmount(amount);
    },
    [setAmount]
  );

  const sendToken = useCallback(
    token => {
      if (activeRef.current) {
        return Promise.reject(null);
      }

      activeRef.current = true;
      showLoading();

      return processPayment({ token, amount })
        .then(() => showSuccess())
        .catch(() => showError());
    },
    [amount]
  );

  return (
    <Fragment>
      <Input label="Amount (GBP)" value={amount} onChange={onChangeAmount} />

      <Elements>
        <CardInput
          amount={amount}
          showLoading={showLoading}
          onError={showError}
          sendToken={sendToken}
        />
      </Elements>
      <Elements>
        <PaymentRequest
          amount={amount}
          showLoading={showLoading}
          onError={showError}
          sendToken={sendToken}
        />
      </Elements>
    </Fragment>
  );
};

const DonationPage = () => {
  const [state, setState] = useState('idle');
  const showError = useCallback(() => setState('error'), []);
  const showSuccess = useCallback(() => setState('success'), []);
  const showLoading = useCallback(() => setState('loading'), []);

  return (
    <ThinHeader>
      <Seo>
        <script id="stripe-script" src="https://js.stripe.com/v3/" />
      </Seo>

      <WithStripe>
        <Container>
          <Wrapper>
            <Heading>
              Donations
              <BlackSpacer />
            </Heading>

            {state === 'success' && (
              <TextLayout>
                <ClapIcon />
                <h4>Thank you!</h4>
                <p>
                  {`Thank you for donating to us. You are awesome and we couldn't do it without you!`}
                </p>
                <Confetti />
              </TextLayout>
            )}

            {state === 'error' && (
              <TextLayout>
                <ThinkingIcon />
                <h4>Oops, well, this is awkward!</h4>
                <p>
                  {`Something has gone wrong and we couldn't process your request! Please try again later.`}
                </p>
              </TextLayout>
            )}

            {(state === 'idle' || state === 'loading') && (
              <h3>
                {`We hope you're enjoying the show! Please consider donating a small amount to support us organising more events in the future.`}
              </h3>
            )}

            {(state === 'idle' || state === 'loading') && (
              <LoadingWrapper isLoading={state === 'loading'}>
                <Form
                  showSuccess={showSuccess}
                  showError={showError}
                  showLoading={showLoading}
                />
              </LoadingWrapper>
            )}
          </Wrapper>
        </Container>
      </WithStripe>
    </ThinHeader>
  );
};

export default DonationPage;
