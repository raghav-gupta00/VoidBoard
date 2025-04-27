import { asyncHandler } from "../utils/asyncHandler.js";
import { ChatObj } from "../models/chatObj.model.js";
import {ApiResponse} from "../utils/ApiResponse.js"

const saveMsg = asyncHandler(async (req, res) => {
    
    const {username, message} = req.body;

    const newChat = await ChatObj.create({
        username: username,
        message: message
    })

    return res.status(201).json(
        new ApiResponse(200,newChat, "Message saved successfully")
    )
});

const sendChat = asyncHandler(async (req, res) => {

    const updatedChat = await ChatObj.find({}, "username message createdAt").sort({createdAt:1});

    res.status(200).json(
        new ApiResponse(200, updatedChat, "Chat fetched successfully")
    )
});

export { saveMsg, sendChat };
