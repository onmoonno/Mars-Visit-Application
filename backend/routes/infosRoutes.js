import express from "express";
import infos from "../data/infos.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(infos);
});

export default router;
