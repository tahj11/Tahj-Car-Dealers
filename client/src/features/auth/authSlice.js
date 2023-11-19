import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = "/api/auth";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ firstName, lastName, email, role, password, profilePicture }) => {
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("role", role);
      formData.append("password", password);

      //Append the file to the form data if a profile picture is provided
      if (profilePicture) {
        formData.append("profilePicture", profilePicture);
      }

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const response = await axios.post(
        `${backendUrl}/register`,
        formData,
        config
      );

      console.log(formData);

      //return the response data when registration is successful
      return response.data;
    } catch (err) {
      //return custom error message from backend if present
      if (err.response && err.response.data.message) {
        console.log(err.response.data.message);
        throw err.response.data.message;
      } else {
        throw err.message;
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await axios.post(`${backendUrl}/login`, {
        email,
        password,
      });
      return response.data;
    } catch (err) {
      if (err.response && err.response.data.message) {
        throw err.response.data.message;
      } else {
        throw err.message;
      }
    }
  }
);

//Initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
};

//Create the authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoaded: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

//Export actions and reducers
export const { userLoaded, logout } = authSlice.actions;
export default authSlice.reducer;
