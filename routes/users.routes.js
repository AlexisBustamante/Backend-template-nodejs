import { Router } from 'express';
import { check } from 'express-validator';
import { getUsers, createUser, updateUser, deleteUser, getUser } from '../controllers/users.controllers';


const router = Router();

router.get("/", getUsers);
router.get("/:id", getUsers);
router.post("/", [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
]);


export default router;