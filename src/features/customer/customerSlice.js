import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerServer from "./customerService";

export const getUsers = createAsyncThunk(
  "auth/all-customers",
  async (thunkAPI) => {
    try {
      return await customerServer.getUsers();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  customer: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const customerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.customer = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default customerSlice.reducer;
