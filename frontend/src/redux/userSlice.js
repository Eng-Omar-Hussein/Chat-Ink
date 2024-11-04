import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  data: JSON.parse(localStorage.getItem("data")) || null,
  loading: false,
  message: "",
  auth: localStorage.getItem("authToken") || false,
};
export const registerUser = createAsyncThunk(
  "user/register",
  async ({ email, password, firstName, lastName }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.status !== 201 || !response.ok) {
        console.log("object");
        return rejectWithValue(data);
      } else {
        return { data };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.status !== 200 || !response.ok) {
        return rejectWithValue(data);
      } else {
        return { data };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/update",
  async (updateValues, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/user/accountSettings",
        {
          method: "put",
          headers: {
            Authorization: localStorage.getItem("authToken"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateValues),
        }
      );

      const data = await response.json();
      if (response.status !== 201 && response.status !== 200 && !response.ok) {
        return rejectWithValue(data);
      } else {
        return { data };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getUserInfo = createAsyncThunk(
  "user/getUserInfo",
  async (X, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "get",
        headers: {
          Authorization: localStorage.getItem("authToken"),
        },
      });

      const data = await response.json();
      if (response.status !== 201 && response.status !== 200 && !response.ok) {
        return rejectWithValue(data);
      } else {
        return { data };
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // const { email, password } = action.payload;
      // state.user = { email, password };
    },
    register: (state, action) => {},
    logout: (state) => {
      console.log("---------from logged out--------------");
      state.token = null;
      state.error = false;
      state.data = null;
      state.auth = false;
      state.loading = false;
      state.message = "";
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        // localStorage.clear();
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.message = action.payload.data.message;
        state.data = action.payload.data.data;
        state.auth = true;
        localStorage.setItem("authToken", action.payload.data.token);
        localStorage.setItem("data", JSON.stringify(action.payload.data.data));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.token = null;
        state.user = null;
        state.message = action.payload.message;
        console.log(action.payload);
        // localStorage.clear();
      });

    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.error = false;
        state.error = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.token = null;
        state.user = null;
        state.message = action.payload.message;
        console.log(action.payload);
        console.log(state.message);
      });
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.data.message;
        state.data = action.payload.data.data;
        localStorage.setItem("data", JSON.stringify(action.payload.data.data));
      })
      .addCase(updateUser.rejected, (state, action) => {});

    builder
      .addCase(getUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.data = action.payload.data;
        console.log("----------------------------------------");
        console.log("from updated");
        console.log("1- ", action.payload);
        console.log("2- ", action.payload.data);
        console.log("3- ", action.payload.data.data);

        localStorage.setItem("data", JSON.stringify(action.payload.data));
        state.error = false;
        state.error = false;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.token = null;
        state.user = null;
        state.message = action.payload.message;
        console.log(action.payload);
        console.log(state.message);
      });
  },
});

export const { login, register, logout } = userSlice.actions;

export default userSlice.reducer;
