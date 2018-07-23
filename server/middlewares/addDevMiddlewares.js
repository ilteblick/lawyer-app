const path = require('path');
require('dotenv').config();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.EMAIL_API_KEY);

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(compiler, webpackConfig.output.publicPath);

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler, {
    heartbeat: 2000,
  }));

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });

  app.post('/send-email', (req, res) => {
    const { fio, email, message, type } = req.body;
    const msg = {
      to: 'pryb_alexey@mail.ru',
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
