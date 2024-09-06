import express from "express";
import {
  getExSystem,
  addExSystem,
  updateExSystem,
  delExSystem,
} from "../controller/exsystem.controller.js";

const router = express.Router();

router.get("/", getExSystem);
router.post("/", addExSystem);
router.put("/:id", updateExSystem);
router.delete("/:id", delExSystem);

export default router;
