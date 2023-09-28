import express from 'express';
import { signIn, signUp } from '../controllers/auth.js';
import { checkUser } from '../middlewares/checkUser.js';

const authRouter = express.Router();

authRouter.route('/signup').post(signUp);
authRouter.route('/signin').post(checkUser, signIn);

export default authRouter;
