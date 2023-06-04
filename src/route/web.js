import express from "express";
import homeController from "../controller/homeController";

var router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:userID', homeController.getDetailPage)
    return app.use('/', router)
}

module.exports = initWebRoute;