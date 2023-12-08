import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import colorServer from "./colorService";

export const getColors = createAsyncThunk(
  "colors/getColors",
  async (thunkAPI) => {
    try {
      return await colorServer.getcolors();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createColor = createAsyncThunk(
  "colors/create",
  async (data, thunkAPI) => {
    try {
      return await colorServer.createColor(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getColor = createAsyncThunk("colors/get", async (id, thunkAPI) => {
  try {
    return await colorServer.getColor(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const deleteColor = createAsyncThunk(
  "colors/del",
  async (id, thunkAPI) => {
    try {
      return await colorServer.deleteColor(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateColor = createAsyncThunk(
  "colors/update",
  async ({ id, data }, thunkAPI) => {
    try {
      return await colorServer.updateColor({ id, data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  colors: [],
  color: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getColorSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getColors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getColors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.colors = action.payload;
      })
      .addCase(getColors.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createColor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createColor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(createColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateColor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateColor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(updateColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getColor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getColor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.color = action.payload;
      })
      .addCase(getColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteColor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteColor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(deleteColor.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default getColorSlice.reducer;
