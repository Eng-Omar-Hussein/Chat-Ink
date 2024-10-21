import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch chats
const token = localStorage.getItem('token'); // Fetch token inside the thunk
  if (!token) {
    throw new Error('No authentication token found'); // Handle case where token is missing
  }
export const fetchChats = createAsyncThunk('chat/fetchChats', async () => {
  // Simulate a delay for testing loading state
  await new Promise(resolve => setTimeout(resolve, 500));

  const response = await axios.get('http://localhost:5000/api/chats/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data; // Assuming the response returns an array of chats
});

// Async thunk to fetch logged-in user details
export const fetchLoggedInUser = createAsyncThunk('chat/fetchLoggedInUser', async () => {

  const response = await axios.get('http://localhost:5000/api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data; // Assuming the response returns user details
});

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    loggedInUser: null,
    chats: [],
    chatStatus: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    userStatus: 'idle', // Separate status for fetching user data
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchChats thunk lifecycle
      .addCase(fetchChats.pending, (state) => {
        state.chatStatus = 'loading';
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.chatStatus = 'succeeded';
        state.chats = action.payload; // Store chats in state
      })
      .addCase(fetchChats.rejected, (state, action) => {
        state.chatStatus = 'failed';
        state.error = action.error.message;
      })

      // Handle fetchLoggedInUser thunk lifecycle
      .addCase(fetchLoggedInUser.pending, (state) => {
        state.userStatus = 'loading';
      })
      .addCase(fetchLoggedInUser.fulfilled, (state, action) => {
        state.userStatus = 'succeeded';
        state.loggedInUser = action.payload; // Store user details in state
      })
      .addCase(fetchLoggedInUser.rejected, (state, action) => {
        state.userStatus = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export selectors to access state
export const selectChats = (state) => state.chat.chats;
export const selectChatStatus = (state) => state.chat.chatStatus;
export const selectLoggedInUser = (state) => state.chat.loggedInUser;
export const selectUserStatus = (state) => state.chat.userStatus;
export const selectChatError = (state) => state.chat.error;

export default chatSlice.reducer;
