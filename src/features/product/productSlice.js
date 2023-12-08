import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productServer from "./productService";

export const getProducts = createAsyncThunk(
  "get/products",
  async (thunkAPI) => {
    try {
      return await productServer.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createProduct = createAsyncThunk(
  "create/products",
  async (data, thunkAPI) => {
    try {
      return await productServer.createProduct(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  createdProducted: false,
  message: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.createdProducted = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdProducted = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.createdProducted = false;
        state.message = action.error;
      });
  },
});

export default productSlice.reducer;
