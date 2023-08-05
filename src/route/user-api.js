import express from "express";
import userController from "../controller/user/index.js";
import { authMiddleware } from '../middleware/auth-middleware.js';

const userRouter = new express.Router();
userRouter.use(authMiddleware);
userRouter.post('/api/users/current', userController.getUser);

export {
  userRouter
}