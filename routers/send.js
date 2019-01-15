const validator = require('validator');
const express = require('express');
const router = express.Router();
const accountSid = process.env.ACCOUNT_SID || 'AC62b31df86197a01ca49efd95f449827e';
const authToken = process.env.AUTH_TOKEN || 'bd3bf16489e351bcb88023f30285976s';
const client = require('twilio')(accountSid, authToken);

router.post('/text', function (req, res) {
  if (validator.isMobilePhone(validator.escape(req.body.number))) {
    client.messages
    .create({
      body: validator.escape(req.body.message),
      from: '+16123247886',
      to: validator.escape(req.body.number)
    })
    .then(res.send('message sent'))
    .catch(() => res.status(500).send('Server error'));
  } else {
    res.status(400).send('Bad request')
  }
})

router.post('/email', function (req, res) {
  console.log(req.body.message);
  console.log(req.body.email);
  res.send('message sent');
})

router.post('/message', function (req, res) {
  console.log(req.body.message);
  console.log(req.body.domain);
  res.send('message sent');
})

router.post('/log', function (req, res) {
  console.log(req.body.message);
  console.log(req.body.domain);
  res.send('message sent');
})

module.exports = router;
