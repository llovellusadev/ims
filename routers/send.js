var express = require('express');
var router = express.Router();
const accountSid = process.env.ACCOUNT_SID || 'AC62b31df86197a01ca49efd95f449827e';
const authToken = process.env.AUTH_TOKEN || 'bd3bf16489e351bcb88023f30285976s';
const client = require('twilio')(accountSid, authToken);

router.post('/text', function (req, res) {
  client.messages
    .create({
      body: req.body.message,
      from: '+16123247886',
      to: req.body.number
    })
    .then(message => console.log(message.sid))
    .done(res.send('message sent'));
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
