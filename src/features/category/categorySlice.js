import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryServer from "./categoryService";

export const getCategories = createAsyncThunk(
  "category/gets",
  async (thunkAPI) => {
    try {
      return await categoryServer.getCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createCategory = createAsyncThunk(
  "category/create",
  async (data, thunkAPI) => {
    try {
      return await categoryServer.createCategory(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "category/update",
  async ({ id, data }, thunkAPI) => {
    try {
      return await categoryServer.updateCategory({ id, data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCategory = createAsyncThunk(
  "category/get",
  async (id, thunkAPI) => {
    try {
      return await categoryServer.getCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/delete",
  async (id, thunkAPI) => {
    try {
      return await categoryServer.deleteCategory(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  categories: [],
  category: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.category = action.payload;
      })
      .addCase(getCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default categorySlice.reducer;
