import express from "express";
import cors from 'cors';
import blogRoutes from "./routes/blogRoutes.js";
import connectDB from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/blogs", blogRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
})