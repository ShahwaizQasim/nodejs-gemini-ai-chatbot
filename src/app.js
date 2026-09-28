import express from "express";
import router from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.json());
app.use("/api", router);

export default app;
