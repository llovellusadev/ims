const validator = require('validator');
const express = require('express');
const accountSid = process.env.ACCOUNT_SID || 'AC62b31df86197a01ca49efd95f449827e';
const authToken = process.env.AUTH_TOKEN || 'bd3bf16489e351bcb88023f30285976s';
const client = require('twilio')(accountSid, authToken);
const router = express.Router();

router.post('/text', function (req, res) {
  const escapedNumber = validator.escape(req.body.number);
  const escapedMessage = validator.escape(req.body.message);

  console.log(escapedNumber);
  console.log(escapedMessage);

  if (validator.isMobilePhone(escapedNumber)) {
    client.messages
      .create({
        body: escapedMessage,
        from: '+16123247886',
        to: escapedNumber
      })
      .then(res.send('message sent'))
      .catch((err) => {
        console.log(err);
        res.status(500).send('Server error');
      });
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
