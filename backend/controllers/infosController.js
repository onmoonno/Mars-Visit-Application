import asyncHandler from "../middlerware/asyncHandler.js";
import Infos from "../models/infosModel.js";

// @desc Fetch all the infos
// @route GET /api/infos
// @access Public
const getInfos = asyncHandler(async (req, res) => {
  const infos = await Infos.find({});
  res.json(infos);
});

export { getInfos };
