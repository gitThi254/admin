import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import couponServer from "./couponService";

export const getCoupon = createAsyncThunk("coupon/gets", async (thunkAPI) => {
  try {
    return await couponServer.getCoupon();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getaCoupon = createAsyncThunk(
  "coupon/get",
  async (id, thunkAPI) => {
    try {
      return await couponServer.getaCoupon(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteCoupon = createAsyncThunk(
  "coupon/delete",
  async (id, thunkAPI) => {
    try {
      return await couponServer.deleteCoupon(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateCoupon = createAsyncThunk(
  "coupon/update",
  async ({ id, data }, thunkAPI) => {
    try {
      return await couponServer.updateCoupon({ id, data });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createCoupon = createAsyncThunk(
  "coupon/create",
  async (data, thunkAPI) => {
    try {
      return await couponServer.createCoupon(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  coupon: [],
  acoupon: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.coupon = action.payload;
      })
      .addCase(getCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.coupon = action.payload;
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getaCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getaCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.acoupon = action.payload;
      })
      .addCase(getaCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(updateCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(updateCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(deleteCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default couponSlice.reducer;
