import express from 'express';
import { formstats, login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/form", formstats);

export default router