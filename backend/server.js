import express from 'express'
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.routes.js";
import router from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/auth", router);

//app.get("/", (req,res) => {
//    res.send("Hello world")
//});

   

app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});