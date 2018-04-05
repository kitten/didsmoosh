import React, { Component } from 'react'
import { injectStripe, PaymentRequestButtonElement } from 'react-stripe-elements'

const style = {
  paymentRequestButton: {
    theme: 'dark',
    height: '64px',
    type: 'donate',
  }
}

class RequestButton extends Component {
  state = {
    canMakePayment: false
  }

  createRequest = (stripe, amount = 10) => {
    const paymentRequest = stripe.paymentRequest({
      country: 'GB',
      currency: 'gbp',
      total: {
        label: 'Donate Smoosh',
        amount: amount * 100
      }
    })

    paymentRequest.on('token', ({ complete, token, ...data }) => {
      const { showLoading, sendToken, onError, stripe } = this.props

      showLoading()
      sendToken(token.id).then(() => {
        complete('success')
      }).catch(() => {
        complete('fail')
        onError()
      })
    })

    paymentRequest.canMakePayment().then(result => {
      this.setState({ canMakePayment: !!result })
    })

    this.setState({ paymentRequest })
  }

  componentDidMount() {
    const { amount, stripe } = this.props
    if (stripe) {
      this.createRequest(stripe, amount)
    }
  }

  componentWillReceiveProps({ amount, stripe }) {
    if (amount !== this.props.amount && this.state.paymentRequest) {
      this.state.paymentRequest.update({
        total: {
          label: 'Donate Smoosh',
          amount: amount * 100
        }
      })
    }
  }

  render() {
    if (!this.state.canMakePayment) {
      return null;
    }

    return (
      <PaymentRequestButtonElement
        paymentRequest={this.state.paymentRequest}
        style={style}
      />
    )
  }
}

export default injectStripe(RequestButton)
