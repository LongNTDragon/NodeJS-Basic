import express from "express";
import apiController from "../controller/apiController";

var router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', apiController.getAllUser);

    return app.use('/api/v1', router)
}

module.exports = initAPIRoute;