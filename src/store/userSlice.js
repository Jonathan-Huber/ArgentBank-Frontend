import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, signup } from "../api/auth";
import { getProfile, updateProfile } from "../api/user";

// ---API----------------------------------------------------------

// Login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await login(email, password);
      return data;
    } catch (err) {
      return rejectWithValue({
        status: err.status,
        message: err.message,
      });
    }
  }
);

// --- Signup ---
export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await signup(payload);
      return data;
    } catch (err) {
      return rejectWithValue({
        status: err.status,
        message: err.message,
      });
    }
  }
);

// Fetch profile
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (token, { rejectWithValue }) => {
    try {
      const data = await getProfile(token);
      return data;
    } catch (err) {
      return rejectWithValue({
        status: err.status,
        message: err.message,
      });
    }
  }
);

// Update username
export const updateUsername = createAsyncThunk(
  "user/updateUsername",
  async ({ token, username }, { rejectWithValue }) => {
    try {
      const data = await updateProfile(token, username);
      return data;
    } catch (err) {
      return rejectWithValue({
        status: err.status,
        message: err.message,
      });
    }
  }
);

// --- STATE ------------------------------------------------------

const initialState = {
  info: null,
  token: null,
  isLoggedIn: false,

  // loginUser
  statusLogin: "idle",
  errorLogin: null,

  // signupUser
  statusSignup: "idle",
  errorSignup: null,

  // fetchUser
  statusProfile: "idle",
  errorProfile: null,

  // updateUsername
  statusUpdate: "idle",
  errorUpdate: null,
};

// --- SLICE ------------------------------------------------------

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.info = null;
      state.token = null;
      state.isLoggedIn = false;

      state.statusLogin = "idle";
      state.errorLogin = null;
      state.statusSignup = "idle";
      state.errorSignup = null;
      state.statusProfile = "idle";
      state.errorProfile = null;
      state.statusUpdate = "idle";
      state.errorUpdate = null;

      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // loginUser
      .addCase(loginUser.pending, (state) => {
        state.statusLogin = "loading";
        state.errorLogin = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.statusLogin = "succeeded";
        state.isLoggedIn = true;
        state.token = action.payload.body.token;
        if (action.meta.arg.remember) {
          localStorage.setItem("token", action.payload.body.token);
        } else {
          sessionStorage.setItem("token", action.payload.body.token);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.statusLogin = "failed";
        if (action.payload?.status === 400) {
          state.errorLogin = "Incorrect email or password";
        } else if (action.payload?.status === 500) {
          state.errorLogin = "Internal Server Error, please try again later";
        } else {
          state.errorLogin = action.payload?.message || action.error.message;
        }
      })

      // signupUser
      .addCase(signupUser.pending, (state) => {
        state.statusSignup = "loading";
        state.errorSignup = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.statusSignup = "succeeded";
        state.info = action.payload.body;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.statusSignup = "failed";
        if (action.payload?.status === 400) {
          state.errorSignup = "Invalid fields, please check your input";
        } else if (action.payload?.status === 500) {
          state.errorSignup = "Internal Server Error, please try again later";
        } else {
          state.errorSignup = action.payload?.message || action.error.message;
        }
      })

      // fetchUser
      .addCase(fetchUser.pending, (state) => {
        state.statusProfile = "loading";
        state.errorProfile = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.statusProfile = "succeeded";
        state.info = action.payload.body;
        state.isLoggedIn = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.statusProfile = "failed";

        if (action.payload?.status === 401) {
          userSlice.caseReducers.logout(state);
          return;
        }

        if (action.payload?.status === 500) {
          state.errorProfile = "Internal Server Error, please try again later";
        } else {
          state.errorProfile = action.payload?.message || action.error.message;
        }
      })

      // updateUsername
      .addCase(updateUsername.pending, (state) => {
        state.statusUpdate = "loading";
        state.errorUpdate = null;
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        state.statusUpdate = "succeeded";
        state.info = action.payload.body;
      })
      .addCase(updateUsername.rejected, (state, action) => {
        state.statusUpdate = "failed";

        if (action.payload?.status === 401) {
          userSlice.caseReducers.logout(state);
          return;
        }

        if (action.payload?.status === 400) {
          state.errorUpdate = "Invalid username";
        } else if (action.payload?.status === 500) {
          state.errorUpdate = "Internal Server Error, please try again later";
        } else {
          state.errorUpdate = action.payload?.message || action.error.message;
        }
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
