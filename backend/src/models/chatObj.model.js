import mongoose, { Schema } from "mongoose";

const chatObj = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Create an index for the expiration of msg
chatObj.index({ createdAt: 1 }, { expireAfterSeconds: 60 });

export const ChatObj = mongoose.model("ChatObj", chatObj);
