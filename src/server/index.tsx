import * as express from 'express';
import * as React from 'react';
import * as DOMServer from 'react-dom/server';
import App from '../components/App';

const app = express();

app.use(express.static('public'));

function renderFullPage(renderedContent: string) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>React Starter Kit</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" type="text/css" media="all">
</head>
<body>
  <div id="content">${renderedContent}</div>
  <script type="text/javascript" charset="utf-8" src="bundle.js"></script>
</body>
</html>`;
}

app.get('/abc', (req, res) => {
  const renderedContent = DOMServer.renderToString(<App />);
  const renderedPage = renderFullPage(renderedContent);
  res.status(200).send(renderedPage);
});

const port = 3000;
app.listen(port, () => {
  console.log('Listening on port ' + port + '!');
});