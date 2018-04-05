import React, { Component } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { rem } from 'polished'

import {
  injectStripe,
  Elements,
  CardElement,
  StripeProvider
} from 'react-stripe-elements'

import HeroBackground from '../components/HeroBackground'
import PlainCard from '../components/PlainCard'
import Input from '../components/Input'
import CardInput from '../components/CardInput'
import PaymentRequest from '../components/PaymentRequest'
import Confetti from '../components/Confetti'
import Clap from '../components/clap'
import Thinking from '../components/thinking-face'

const ClapIcon = styled(Clap)`
  width: ${rem(200)};
  height: ${rem(200)};
  margin: ${rem(40)} auto;
`

const ThinkingIcon = styled(Thinking)`
  width: ${rem(200)};
  height: ${rem(200)};
  margin: ${rem(40)} auto;
`

const Tagline = styled.h3`
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: ${rem(14)};
  font-size: ${rem(72)};
  margin: ${rem(25)} 0;
  color: rgba(255, 255, 255, 0.88);
`

const Heading = styled.h3`
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: ${rem(2)};
  font-size: ${rem(24)};
`

const Description = styled.p`
  font-size: ${rem(18)};
  line-height: ${rem(28)};
  font-weight: 600;
  text-align: center;
  color: #0e1e25;
  padding: ${rem(12)} 0;
  margin-bottom: ${rem(32)};
`;

class Donate extends Component {
  state = {
    isLoading: false,
    hasError: false,
    hasSucceeded: false,
    stripe: null,
    amount: 6
  }

  componentDidMount() {
    this.setState({
      stripe: window.Stripe('pk_live_b75NLmsiCGT6UZ5Q7hnZj3Gn')
    })
  }

  onChangeAmount = ({ target: { value } }) => {
    const x = typeof value === 'string' ? parseFloat(value) : value
    if (!x) {
      return this.setState({ amount: undefined })
    }

    const amount = Math.max(1, Math.min(1000, Math.floor(x)))
    this.setState({ amount })
  };

  showLoading = () => {
    this.setState({ isLoading: true, hasError: false, hasSucceeded: false })
  }

  sendToken = token => {
    this.setState({ isLoading: true, hasError: false, hasSucceeded: false })
    const { amount } = this.state

    return fetch('https://smoosh-api.kitten.sh/donation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token,
        amount
      })
    }).then(res => {
      if (!res.ok) {
        return Promise.reject(res)
      }

      return res.json()
    }).then(res => {
      if (Array.isArray(res.errors) && res.errors.length > 0) {
        return Promise.reject(res.errors)
      } else if (!res.data.ok) {
        return Promise.reject(res)
      }

      this.setState({ isLoading: false, hasError: false, hasSucceeded: true })
      return Promise.resolve(res)
    }).catch(err => {
      console.error(err)
      this.setState({ isLoading: false, hasError: true, hasSucceeded: false })
    })
  }

  onError = err => {
    console.error(err)
    this.setState({ isLoading: false, hasError: true, hasSucceeded: false })
  }

  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        <HeroBackground fullscreen>
          <Head>
            <script src="https://js.stripe.com/v3/" />
            <title>Donate to Smoosh</title>
          </Head>

          <Tagline>
            Donations
          </Tagline>

          {this.state.hasError && (
            <PlainCard>
              <ThinkingIcon />
              <Heading>
                Oops, this is awkward
              </Heading>
              <Description>
                Something has gone wrong and we couldn't process your request! Please try again later.
              </Description>
            </PlainCard>
          )}

          {this.state.hasSucceeded && (
            <PlainCard>
              <ClapIcon />
              <Heading>
                Thank you
              </Heading>
              <Description>
                Thank you for donating to us. You're awesome and we couldn't do it without you!
              </Description>
              <Confetti />
            </PlainCard>
          )}

          {!this.state.hasError && !this.state.hasSucceeded && (
            <PlainCard>
              <Heading>
                Support our future events
              </Heading>

              <Description>
                All donations that are not used to fund our events go to non-profit initiatives that help students learn how to program
              </Description>

              <Input
                label="Amount (GBP)"
                type="number"
                value={this.state.amount}
                min={1}
                max={1000}
                step={1}
                onChange={this.onChangeAmount}
              />

              <Elements>
                <CardInput
                  amount={this.state.amount}
                  showLoading={this.showLoading}
                  sendToken={this.sendToken}
                  onError={this.onError}
                  isDisabled={this.state.isLoading}
                />
              </Elements>

              <Elements>
                <PaymentRequest
                  amount={this.state.amount}
                  showLoading={this.showLoading}
                  sendToken={this.sendToken}
                  onError={this.onError}
                />
              </Elements>
            </PlainCard>
          )}
        </HeroBackground>
      </StripeProvider>
    )
  }
}

export default Donate
