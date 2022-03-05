import { Router } from 'express';
import metodosController from '../controllers/methods/methods.controllers';

const router = Router();
router.post("/todos", metodosController.todos);
router.post("/nuevo", metodosController.NuevoMetodo);
router.delete("/eliminar/:id", metodosController.EliminarMetodo);
router.put("/editar", metodosController.EditarMetodo);



module.exports = router;