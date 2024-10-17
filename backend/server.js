const express = require("express");

const connectDB = require("./config/db");

const app = express();

// Routes
const groupRoutes = require("./routes/groupRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./controllers/authMiddleware");
connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/group", authMiddleware, groupRoutes);
app.use("/api/chats", authMiddleware, chatRoutes);
app.use("/api/messages", authMiddleware, messageRoutes);
app.use("/api/notifications", authMiddleware, notificationRoutes);
app.use("/api/user", authMiddleware, userRoutes);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
