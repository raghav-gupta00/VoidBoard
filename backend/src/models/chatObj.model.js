import mongoose, { Schema } from "mongoose"

const chatObj = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    message: {
        type: String
    }
},
    { expireAfterSeconds: 60 },
    {
        timestamps: true
    })

export const ChatObj = mongoose.model("ChatObj", chatObj);