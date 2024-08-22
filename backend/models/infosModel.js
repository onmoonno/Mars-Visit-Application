import mongoose from "mongoose";

const infosSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    departureDate: {
      type: String,
      required: true,
    },
    returnDate: {
      type: String,
      required: true,
    },
    specialRequest: {
      type: String,
    },
    accommodation: {
      type: String,
      required: true,
    },
    healthy: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: String,
      required: true,
    },
    emergencyContactPhone: {
      type: String,
      required: true,
    },
    medicalCondition: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Infos = mongoose.model("Infos", infosSchema);

export default Infos;
