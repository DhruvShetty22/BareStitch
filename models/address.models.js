import { time } from "console";
import mongoose from "mongoose";
const addressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    addressType: {
      type: String,
      enum: ["User", "Warehouse"],
      required: true,
    },
    buildingName: {
      type: String,
      required: true,
    },
    roomNo: {
      type: String, // Only for user addresses
      required: true,
    },
  },
  { timestamps: true }
);
export const Address = mongoose.model("Address", addressSchema);
