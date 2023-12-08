import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bCategoriesServer from "./bcategoryService";

export const getBCategories = createAsyncThunk(
  "bCategory/gets",
  async (thunkAPI) => {
    try {
      return await bCategoriesServer.getBcategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createBCategory = createAsyncThunk(
  "bCategory/create",
  async (data, thunkAPI) => {
    try {
      return await bCategoriesServer.createBcategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  bCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const bCategories = createSlice({
  name: "bCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.bCategories = action.payload;
      })
      .addCase(getBCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createBCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(createBCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default bCategories.reducer;
