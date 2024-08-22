import asyncHandler from "../middlerware/asyncHandler.js";
import Infos from "../models/infosModel.js";

// @desc Fetch all the infos
// @route GET /api/infos
// @access Public
const getInfos = asyncHandler(async (req, res) => {
  const infos = await Infos.find({});
  res.json(infos);
});

// @desc Post all the infos
// @route POST /api/infos/submit
const postInfos = asyncHandler(async (req, res) => {
  const {
    name,
    dateOfBirth,
    nationality,
    email,
    phone,
    departureDate,
    returnDate,
    specialRequest,
    accommodation,
    healthy,
    emergencyContact,
    emergencyContactPhone,
    medicalCondition,
  } = req.body;

  const newInfo = await Infos.create({
    name,
    dateOfBirth,
    nationality,
    email,
    phone,
    departureDate,
    returnDate,
    specialRequest,
    accommodation,
    healthy,
    emergencyContact,
    emergencyContactPhone,
    medicalCondition,
  });

  res.json(newInfo);
});

export { getInfos, postInfos };
