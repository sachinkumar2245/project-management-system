import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

//dot env config
dotenv.config();
const PORT = process.env.PORT || 8000;


//CORS options
const corsOptions={
    origin: process.env.CORS_ORIGIN,
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());


//ROUTES
// app.use("api/auth", authRoutes);

//METHODS
app.get('/', (req, res) =>{
    res.send("Welcome to the Project Management System API");
});

app.get('/login', (req, res) =>{
    res.send('This is login page');
});

export {app, PORT};