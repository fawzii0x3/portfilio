import express from "express";
import helmet from "helmet";
import path from "path";
import formRoute from "./Routes/form";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan())

app.use(express.json());
app.use(helmet());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/api/hire-me", formRoute);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export default app;
