import express from "express"
const app = express();
const router = express.Router();
import { saveMsg, sendChat } from "../controllers/chat.controller.js";

// router.route("/chat").get((req, res)=>{
//     res.send("Yeah Bitch ! Yeah Science !");
// })

router.route("/chat").post(saveMsg);

router.route("/chat").get(sendChat);

export default router;