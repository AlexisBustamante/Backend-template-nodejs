import express from "express";
import vehiculosController from "../controllers/vehiculosController";

const router = express.Router();
router.post("/mis-vehiculos", vehiculosController.misVehiculos);
module.exports = router;
