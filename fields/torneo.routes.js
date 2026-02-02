import { Router } from "express";
import { crearTorneo, obtenerTorneos } from "./torneo.controller.js";
import { uploadTournamentImage } from "../middlewares/file-uploader.js";

const router = Router();

router.get('/', obtenerTorneos);
router.post('/', uploadTournamentImage.single('image'), crearTorneo);

export default router;