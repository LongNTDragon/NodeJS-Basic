import express from 'express';
import configViewEngine from './configs/viewEngine';


const app = express();
configViewEngine(app);

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(3000)