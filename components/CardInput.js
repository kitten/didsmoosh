import React, { Component } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import { injectStripe, CardElement } from 'react-stripe-elements'

import PayButton from '../components/PayButton'

const Container = styled.form``

const Label = styled.span`
  display: block;
  color: rgb(65, 65, 70);
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 17px;
`

const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;

  box-shadow:
    rgba(50, 50, 93, 0.14902) 0 1px 3px,
    rgba(0, 0, 0, 0.0196078) 0 1px 0;

  margin: 10px 0 20px 0;
  padding: 12px 16px;
  border-radius: 4px;
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
          <Label>Donate by Card</Label>
          <CardElement />
        </Wrapper>

        <PayButton disabled={isDisabled}>Donate</PayButton>
      </Container>
    )
  }
}

export default injectStripe(CardInput)
