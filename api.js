import express from 'express';
import upload from 'express-fileupload';
import { resolve } from 'path';

const app = express();

app.use(upload());

app.post('/api/upload', ({ files: { file } }, res) => {
  file.mv(resolve(`uploads/${file.name}`), (err) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    res.json('OK');
  });
});

export const handler = app;
