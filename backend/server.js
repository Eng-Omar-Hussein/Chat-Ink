const express = require('express');
const connectDB = require('./config/db');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');
const notificationRoutes = require('./routes/notificationRoutes');


connectDB();

const app = express();
app.use(express.json());

app.use('/api/chats', chatRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/notifications', notificationRoutes);


const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
