import { Router } from "express";
import { obtenerEquipos, crearEquipo, obtenerEquipoPorId } from "./equipo.controller.js";

// Tus middlewares tal cual los tienes
import { uploadTeamImage } from "../middlewares/file-uploader.js";

const router = Router();

// Rutas GET
router.get('/', obtenerEquipos);
router.get('/:id', obtenerEquipoPorId);

// Rutas POST
router.post('/', uploadTeamImage.single('image'), crearEquipo);

export default router;