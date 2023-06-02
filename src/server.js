import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config()


const app = express();
configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(process.env.PORT)