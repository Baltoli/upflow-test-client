import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());

app.post('/success', (req, res) => {
  console.log('success: ' + JSON.stringify(req.body));
  res.sendStatus(200);
});

app.post('/error', (req, res) => {
  console.error('error: ' + JSON.stringify(req.body));
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Webhook client app listening on port: ${port}`);
});
