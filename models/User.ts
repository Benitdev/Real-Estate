import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subName: { type: String },
    email: { type: String, required: true, unique: true },
    birthday: { type: Date },
    image: String,
    gender: String,
    cccd: String,
    balance: Number,
    phoneNumber: String,
    password: { type: String },
    address: String,
    role: { type: String, required: true, default: "customer" },
    emailVerified: { type: String, default: null },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User
