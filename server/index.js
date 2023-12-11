import express from "express";
import cors from "cors";
import adviceRoutes from "./routes/adviceRoutes.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/test", async (req, res) => {
  res.send("hello from server");
});
app.use("/api/advice", adviceRoutes);

const startServer = async () => {
  try {
    app.listen(3000, () => {
      console.log("Server has started on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
