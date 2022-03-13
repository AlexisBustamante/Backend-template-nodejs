import { Router } from 'express';
import auth from '../controllers/auth.controllers';

const router = Router();
router.post('/login', auth.login);
module.exports = router;