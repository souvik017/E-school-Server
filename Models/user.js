import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    token: String,
    image: {
      url: String,
      public_id: String,
    },
    role: {
      type: [String],
      default: ["Subscriber"],
      enum: ["Subscriber", "Instructor"],
    },

    qualification: String,
    experience: {
      type: Number,
      min: 1,
    },
    bankName: String,
    branchName: String,
    accountNumber: Number,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
