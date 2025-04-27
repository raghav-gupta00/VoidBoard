import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (built frontend)
app.use(express.static(path.join(__dirname, '../dist')));

// API routes
import userRouter from "./routes/chat.routes.js";
app.use("/api", userRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
})

export { app };
