var express = require('express');
var router = express.Router();
const accountSid = 'AC62b31df86197e01ca49efd95f419827d';
const authToken = 'b414a4dd80b48fb6d0bc302b66d6a116';
const client = require('twilio')(accountSid, authToken);

router.get('/text', function (req, res) {
  /*client.messages
    .create({
      body: 'From Llewellyn Lovell',
      from: '',
      to: ''
    })
    .then(message => console.log(message.sid))
    .done(res.send('email sent'));*/
    res.send('text');
})

router.get('/email', function (req, res) {
  res.send('email');
})

router.get('/message', function (req, res) {
  res.send('message');
})

router.get('/log', function (req, res) {
  res.send('log');
})

module.exports = router;
