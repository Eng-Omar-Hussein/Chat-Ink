import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  data: null,
  loading: false,
  notifications: null,
  message: "",
};

export const getPublicGroup = createAsyncThunk(
  "groups/getPublicGroup",
  async (x, { rejectWithValue }) => {
    try {
      console.log("inside getPublicGroup");
      const response = await fetch(
        "http://localhost:5000/api/group/publicGroups",
        {
          method: "get",
          headers: {
            Authorization: localStorage.getItem("authToken"),
          },
        }
      );
      const data = await response.json();
      console.log("data from get public gorup ", data);
      if (response.status !== 201 && response.status !== 200 && !response.ok) {
        return rejectWithValue(data);
      } else {
        return data;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const groupSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.error = null;
      state.data = null;
      state.loading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPublicGroup.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("from pending state");
      })
      .addCase(getPublicGroup.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
        console.log("from fulfilled state", action.payload);
      })
      .addCase(getPublicGroup.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.token = null;
        state.user = null;
        state.message = action.payload.message;
        console.log("from reject state");
      });
  },
});

export const { logout } = groupSlice.actions;

export default groupSlice.reducer;
