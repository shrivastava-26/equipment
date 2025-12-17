import express from "express";
import {
  getEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipment
} from "../controller/equipment.controller.js"

const equipRouter = express.Router();

equipRouter.get("/equipment", getEquipment);
equipRouter.post("/equipment", addEquipment);
equipRouter.put("/equipment/:id", updateEquipment);
equipRouter.delete("/equipment/:id", deleteEquipment);

export default equipRouter;
