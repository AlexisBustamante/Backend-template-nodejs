import express from "express";
import clientesController from "../controllers/clientesController";

const router = express.Router();
router.post("/todos", clientesController.todos);
router.post("/mis-clientes", clientesController.MisClientes);
router.post("/Vehiculos-clientes/:c_id", clientesController.VehiculosCliente);
router.post("/nuevo-cliente", clientesController.NuevoCliente);
router.delete("/eliminar/:c_id", clientesController.EliminarCliente);
router.put("/editar/:c_id", clientesController.EditarCliente);
module.exports = router;