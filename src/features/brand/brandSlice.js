import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import brandServer from "./brandService";

export const getBrands = createAsyncThunk(
  "brands/getBrands",
  async (thunkAPI) => {
    try {
      return await brandServer.getBrands();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createBrand = createAsyncThunk(
  "brands/create",
  async (data, thunkAPI) => {
    try {
      return await brandServer.createBrands(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateBrand = createAsyncThunk(
  "brands/update",
  async ({ id, data }, thunkAPI) => {
    try {
      return await brandServer.updateBrand({ id, data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getBrand = createAsyncThunk("brands/get", async (id, thunkAPI) => {
  try {
    return await brandServer.getBrand(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const deleteBrand = createAsyncThunk(
  "brands/delete",
  async (id, thunkAPI) => {
    try {
      return await brandServer.deleteBrand(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  brands: [],
  brand: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brands = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(updateBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brand = action.payload;
      })
      .addCase(getBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteBrand.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(deleteBrand.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default brandSlice.reducer;
