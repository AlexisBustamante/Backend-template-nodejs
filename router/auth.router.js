import express from 'express';
import auth from '../controllers/authController';

const router = express.Router();
router.post('/signIn', auth.signIn);
router.post('/register', auth.register);
router.post('/login', auth.login);
router.post('/servicio', auth.servicio);
module.exports = router;