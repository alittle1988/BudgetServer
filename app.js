import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
import userRouter from "./routes/users.route.js";

dotenv.config();

const app = express();
const port = 5001;
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on Port ${port}!`);
  });
});
