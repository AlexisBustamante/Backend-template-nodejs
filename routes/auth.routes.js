import { Router } from 'express';
import auth from '../controllers/auth/auth.controllers';

const router = Router();
router.post('/register', auth.register);
router.post('/login', auth.login);
// router.post('/signIn', auth.signIn);
// router.post('/servicio', auth.servicio);
module.exports = router;