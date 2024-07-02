import express from "express";
import bodyParser from "body-parser";
import userRoutes from "../routes/userRoutes";
import cors from "cors";
import { errorMiddleware } from "../middleware/errorMiddleware";

export const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api", userRoutes);

app.use(errorMiddleware);
