import React, { Component } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { injectStripe, CardElement } from 'react-stripe-elements'

import PayButton from '../components/PayButton'

const Container = styled.form``

const Label = styled.span`
  display: block;
  color: rgb(65, 65, 70);
  font-size: ${rem(14)};
  text-align: left;
  text-transform: uppercase;
  margin-bottom: ${rem(17)};
`

const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;

  box-shadow:
    rgba(50, 50, 93, 0.14902) 0 ${rem(1)} ${rem(3)},
    rgba(0, 0, 0, 0.0196078) 0 ${rem(1)} 0;

  margin: ${rem(10)} 0 ${rem(20)} 0;
  padding: ${rem(12)} ${rem(16)};
  border-radius: ${rem(4)};
  background: #fff;
  border: 1px solid #d1d3d4;
`

class CardInput extends Component {
  checkout = evt => {
    evt.preventDefault();
    const { showLoading, sendToken, onError, stripe } = this.props

    showLoading()

    stripe.createToken().then(payload => {
      return sendToken(payload.token.id)
    }).catch(err => {
      onError(err)
    })
  }

  render() {
    const { stripe, isDisabled } = this.props
    if (!stripe) {
      return null
    }

    return (
      <Container onSubmit={this.checkout}>
        <Wrapper>
          <Label>Pay by Card</Label>
          <CardElement />
        </Wrapper>

        <PayButton disabled={isDisabled}>Donate</PayButton>
      </Container>
    )
  }
}

export default injectStripe(CardInput)
