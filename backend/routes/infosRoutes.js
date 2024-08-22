import express from "express";
import Infos from "../models/infosModel.js";
import asyncHandler from "../middlerware/asyncHandler.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const infos = await Infos.find({});
    res.json(infos);
  })
);

export default router;
