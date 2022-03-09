import { Router } from 'express';
import { getMethods } from '../controllers/methods.controllers';

const router = Router();

router.get('/', getMethods);
// router.post("/", metodosController.todos);
// router.post("/nuevo", metodosController.NuevoMetodo);
// router.delete("/eliminar/:id", metodosController.EliminarMetodo);
// router.put("/editar", metodosController.EditarMetodo);



export default router;