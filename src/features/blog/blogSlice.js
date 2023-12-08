import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import blogServer from "./blogService";

export const getBlogs = createAsyncThunk("blogs/gets", async (thunkAPI) => {
  try {
    return await blogServer.getBlogs();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const createBlog = createAsyncThunk(
  "blogs/create",
  async (data, thunkAPI) => {
    try {
      return await blogServer.createBlog(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getBlog = createAsyncThunk("blogs/get", async (id, thunkAPI) => {
  try {
    return await blogServer.getBlog(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateBlog = createAsyncThunk(
  "blogs/update",
  async ({ id, data }, thunkAPI) => {
    try {
      return await blogServer.deleteBlog({ id, data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteBlog = createAsyncThunk("blogs/id", async (id, thunkAPI) => {
  try {
    return await blogServer.createBlog(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const resetState = createAction("Reset_all");

const initialState = {
  blogs: [],
  blog: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const blogSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(resetState, () => initialState);
  },
});

export default blogSlice.reducer;
