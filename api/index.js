require('now-env')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.post('/donation', (req, res) => {
  if (!req.body || !req.body.token || !req.body.amount) {
    return res.status(400).json({
      data: { ok: false },
      errors: ['Invalid input']
    })
  }

  const { amount, token } = req.body

  if (typeof amount !== 'number' || amount < 1 || amount > 1000) {
    return res.status(400).json({
      data: { ok: false },
      errors: ['Invalid amount']
    })
  }

  stripe.charges.create({
    amount: amount * 100 /* pounds to pence */,
    currency: 'gbp',
    description: 'Donate Smoosh',
    source: token,
  }, function(err, charge) {
    if (err) {
      return res.status(400).json({
        data: { ok: false },
        errors: [err.message ? err.message : `${err}`]
      })
    }

    return res.status(200).json({
      data: { ok: true },
      errors: []
    })
  })
})

app.listen(process.env.PORT || 3001, () => {
  console.log('Ready')
})
