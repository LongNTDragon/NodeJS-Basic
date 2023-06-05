import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web'

require('dotenv').config()


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup ViewEngine
configViewEngine(app);

//init Web Route
initWebRoute(app);


app.listen(process.env.PORT)