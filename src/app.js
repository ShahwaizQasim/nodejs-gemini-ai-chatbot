import express from "express";
import { ENV } from "./config/constant.js";
import router from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use("/api", router);

export default app;
