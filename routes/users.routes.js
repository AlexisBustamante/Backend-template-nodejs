import { Router } from 'express';
import { check } from 'express-validator';
import { getUsers, createUser, updateUser, deleteUser, getUser } from '../controllers/users.controllers';
import { validateFields } from '../middlewares/validation-fields';
import { isEmailExist, isUserExist } from '../helpers/index';


const router = Router();

router.get("/", getUsers);
router.post("/", [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 }),
    check('email').custom(isEmailExist),
    validateFields
], createUser);
router.put("/:id", [
    check('id', 'El ID es obligatorio').not().isEmpty(),
    check('id').custom(isUserExist),
    validateFields
], updateUser);


export default router;