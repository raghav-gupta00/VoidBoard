import express from "express";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// CORS setup
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Body parsing middleware with size limits
app.use(express.json({
    limit: "16kb"
}));

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

// Resolve paths correctly with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the public directory first
app.use(express.static("public"));

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// API routes import
import userRouter from "./routes/chat.routes.js";

// API routes
app.use("/api", userRouter);

// Catch-all route for React Router (if no API route matches)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});


export { app };
