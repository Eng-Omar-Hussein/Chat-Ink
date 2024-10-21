// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice'; // Import the chat slice reducer
import roomReducer from './roomSlice'; // Your existing room slice

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    room: roomReducer,
  },
});

