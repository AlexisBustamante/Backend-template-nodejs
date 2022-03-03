import express from "express";
import metodosController from "../controllers/metodosController";

const router = express.Router();
router.post("/todos", metodosController.todos);
router.post("/nuevo", metodosController.NuevoMetodo);
router.delete("/eliminar/:id", metodosController.EliminarMetodo);
router.put("/editar", metodosController.EditarMetodo);
module.exports = router;
