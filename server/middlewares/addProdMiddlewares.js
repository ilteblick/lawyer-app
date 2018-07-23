const path = require('path');
require('dotenv').config();
const express = require('express');
const compression = require('compression');
const sgMail = require('@sendgrid/mail');
console.log(process.env.EMAIL_API_KEY);
sgMail.setApiKey(process.env.EMAIL_API_KEY);

module.exports = function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')));

  app.post('/send-email', (req, res) => {
    const { fio, email, message, type } = req.body;
    const msg = {
      to: process.env.EMAIL_TO,
      from: 'test@example.com',
      subject: 'beladvocate.by API message',
      text: `ФИО: ${fio}, тип клиента: ${type}, ${email}. ${message}`,
      html: `<strong>ФИО: ${fio}, тип клиента: ${type}, ${email}. ${message}</strong>`,
    };
    sgMail.send(msg)
      .then(() => {
        res.send('ok');
      });
  });
};
