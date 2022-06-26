import { realEstate } from "./../utils/data"
import mongoose from "mongoose"
import { ReadableStreamDefaultReader } from "node:stream/web"

const realEstateSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    realEstate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RealEstate",
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Chờ xác nhận",
    },
  },
  {
    timestamps: true,
  }
)

const BuyRequest =
  mongoose.models.BuyRequest || mongoose.model("BuyRequest", realEstateSchema)
export default BuyRequest
