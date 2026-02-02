
import {Router} from "express";
import { getFields, createField, getFieldById } from "./field.controller.js";

import { validateCreateField, validateGetFieldById } from "../middlewares/field-validators.js";   
import { uploadFieldImage } from "../middlewares/file-uploader.js";

const router = Router ();

//Rutas GET
router.get('/', getFields);
router.get('/:id', validateGetFieldById, getFieldById);

//Rutas POST
router.post('/', uploadFieldImage.single('image'), validateCreateField, createField);
//Rutas PUT

//Rutas DELETE

export default router;