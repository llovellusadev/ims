const validator = require('validator');
const express = require('express');
const aws = require('aws-sdk');
const Promise = require("bluebird");
const net = require('net');

const accountSid = process.env.ACCOUNT_SID || 'AC62b31df86197a01ca49efd95f449827e';
const authToken = process.env.AUTH_TOKEN || 'bd3bf16489e351bcb88023f30285976s';
const client = require('twilio')(accountSid, authToken);

aws.config.update({region: 'us-east-1'});
const ses = new aws.SES();
const router = express.Router();

function messageCrestron(domain, port, data) {
  return new Promise(function (resolve, reject) {
    const client = new net.Socket();

    client.connect(port, domain, function() {
      client.write(data);
    });

    client.on('data', function() {
      client.destroy();
    });

    client.on('error', function() {
      client.destroy();
      reject();
    });

    client.on('close', function() {
      resolve();
    });

    setTimeout(() => {
      client.destroy();
      reject();
    }, 2000);
  });
}

router.post('/text', function (req, res) {
  const escapedNumber = validator.escape(req.body.number);
  const escapedMessage = validator.escape(req.body.message);

  if (validator.isMobilePhone(escapedNumber)) {
    client.messages
      .create({
        body: escapedMessage,
        from: '+16123247886',
        to: escapedNumber
      })
      .then((data) => {
        console.log(data);
        res.send('Message sent');
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('Server error');
      });
  } else {
    res.status(400).send('Bad request')
  }
})

router.post('/email', function (req, res) {
  const escapedMessage = validator.escape(req.body.message);
  const escapedEmail = validator.escape(req.body.email);

  const sender = 'Llewellyn Lovell <llovellusadev@gmail.com>';
  const recipient = escapedEmail;
  const subject = 'Llewellyn Lovell - Interview - Email';
  const body_text = escapedMessage;
  const charset = 'UTF-8';

  var params = { 
    Source: sender, 
    Destination: { 
      ToAddresses: [
        recipient 
      ],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: charset
      },
      Body: {
        Text: {
          Data: body_text,
          Charset: charset 
        }
      }
    }
  };

  ses.sendEmail(params, function(err) {
    if(err) {
      console.log(err.message);
      res.status(500).send('Server error');
    } else {
      res.send('Message sent');
    }
  });
})

router.post('/message', function (req, res) {
  const escapedMessage = validator.escape(req.body.message);
  const escapedDomain = validator.escape(req.body.domain);

  messageCrestron(escapedDomain, 8124, escapedMessage)
    .then(() => {
      res.send('Message sent');
    })
    .catch((e) => {
      res.status(500).send('Server error');
    });
})

router.post('/log', function (req, res) {
  const escapedMessage = validator.escape(req.body.message);
  const escapedDomain = validator.escape(req.body.domain);

  messageCrestron(escapedDomain, 8125, escapedMessage)
    .then(() => {
      res.send('Message sent');
    })
    .catch((e) => {
      res.status(500).send('Server error');
    });
})

module.exports = router;
