import mongoose from "mongoose"
import { ReadableStreamDefaultReader } from "node:stream/web"

const realEstateSchema = new mongoose.Schema(
  {
    userPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userApprove: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: String,
    images: [String],
    startDay: { type: Date },
    endDay: { type: Date },
    address: { type: String },
    area: Number,
    price: Number,
    desc: String,
    bedRoom: Number,
    toiletRoom: Number,
    floors: Number,
    juridical: String,
  },
  {
    timestamps: true,
  }
)

const RealEstate =
  mongoose.models.RealEstate || mongoose.model("RealEstate", realEstateSchema)
export default RealEstate
