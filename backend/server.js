const express = require("express");

const connectDB = require("./config/db");

const app = express();

// Routes
const groupRoutes = require("./routes/groupRoutes");
connectDB();

app.use(express.json());

app.use("/api/group", groupRoutes);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
