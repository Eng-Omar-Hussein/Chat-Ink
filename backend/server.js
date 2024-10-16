const express = require("express");

const connectDB = require("./config/db");

const app = express();

// Routes
const groupRoutes = require("./routes/groupRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const userRoutes = require("./routes/userRoutes");
const authMiddleware = require("./controllers/authMiddleware");
connectDB();

app.use(express.json());

app.use("/api/group", groupRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
