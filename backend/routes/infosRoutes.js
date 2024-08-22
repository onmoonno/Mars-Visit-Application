import express from "express";
import { getInfos } from "../controllers/infosController";

const router = express.Router();

router.route("/").get(getInfos);

export default router;
