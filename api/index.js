import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import multer from 'multer';

import apiRouter from './routes/index.js';

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(multer({ dest: '../uploads/' }).single('upfile'));
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});


apiRouter(app);


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
