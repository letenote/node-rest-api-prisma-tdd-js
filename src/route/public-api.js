import express from "express";
import userController from "../controller/user/index.js";

const publicRouter = new express.Router();
publicRouter.post('/api/users', userController.register);

export {
    publicRouter
}