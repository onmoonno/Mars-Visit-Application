import express from "express";
import { getInfos, postInfos } from "../controllers/infosController.js";

const router = express.Router();

router.route("/").get(getInfos);
router.route("/submit").post(postInfos);

export default router;
