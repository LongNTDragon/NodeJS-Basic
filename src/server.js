import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web'
import initAPIRoute from './route/api'

require('dotenv').config()


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup ViewEngine
configViewEngine(app);

//init Web Route
initWebRoute(app);

//init API Route
initAPIRoute(app);


app.listen(process.env.PORT)