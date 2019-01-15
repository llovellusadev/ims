const express = require('express');
const next = require('next');
const sendRouter = require('./routers/send');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.use(express.json());
  server.use(express.urlencoded());
  server.use('/send', sendRouter);

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(8081, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:8081');
  })
})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
})
