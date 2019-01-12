var express = require('express');
var router = express.Router();
const accountSid = '';
const authToken = '';
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
