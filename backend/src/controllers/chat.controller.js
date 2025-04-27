import { asyncHandler } from "../utils/asyncHandler.js";
import fs from 'fs/promises'; // <-- fix here


const saveMsg = asyncHandler(async (req, res) => {
    //todo: write ChatObj.save functionality

    const data = req.body;

    await fs.writeFile('data.json', JSON.stringify(data, null, 2)); // no 'utf-8' needed

    res.status(200).json({
        success: true,
        message: 'JSON data saved successfully'
    });
});

const sendChat = asyncHandler(async (req, res) => {
    //todo: write functionality to get whole chat and send to frontend

    res.send("Yeah Bitch! Yeah Science!");
});

export { saveMsg, sendChat };
