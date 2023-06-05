import express from "express";
import homeController from "../controller/homeController";

var router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:userID', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/edit-user', homeController.editUser);
    router.post('/update-user', homeController.updateUser);
    router.post('/delete-user', homeController.deleteUser);

    return app.use('/', router)
}

module.exports = initWebRoute;