import mongoose from "mongoose";

const externalSystemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    baseUrl: {
      type: String,
    },
    authMethod: {
      type: String,
      enum: ["apiKey", "password", "biometric"],
    },
    key: {
      type: String,
    },
    value: {
      type: String,
    },
    authPlace: {
      type: String,
      enum: ["header", "qparams"],
    },
  },
  { timestamps: true }
);

const Exsystem = mongoose.model("Exsystem", externalSystemSchema);
export default Exsystem;
