import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = "http://localhost:8080/user";

export const loginUser = createAsyncThunk(
  'userAuth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/login`, credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateCart = createAsyncThunk(
    'userAuth/updateCart',
    async (data, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.userAuth.token;
  
      try {
        const response = await axios.patch(`${baseUrl}/update-cart`, data, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  export const removeCartItem = createAsyncThunk(
    'userAuth/removeCartItem',
    async (id, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.userAuth.token;
  
      try {
        const response = await axios.patch(`${baseUrl}/remove-cart/${id}`, {id}, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }, 
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  export const updateOrders = createAsyncThunk(
    'userAuth/updateOrders',
    async (cartItems, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.userAuth.token;
  
      try {
        const response = await axios.patch(`${baseUrl}/update-orders`, cartItems, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
  export const updateWishlist = createAsyncThunk(
    'userAuth/updateWishlist',
    async (wishlistItems, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.userAuth.token;
  
      try {
        const response = await axios.patch(`${baseUrl}/update-wishlist`, wishlistItems, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );
const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState: {
    token: null,
    username: null,
    userType: null,
    loading: false,
    error: null,
    user:null,
    cartUpdateStatus: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.username = null;
      state.userType = null;
      state.user = null;
      state.cartUpdateStatus = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.username = action.payload.name;
        state.userType = action.payload.usertype;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCart.pending, (state) => {
        state.cartUpdateStatus = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.cartUpdateStatus = false;
        state.user = action.payload
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.cartUpdateStatus = false;
        state.error = action.payload;
      })

      .addCase(removeCartItem.pending, (state) => {
        state.cartUpdateStatus = true;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.cartUpdateStatus = false;
        state.user = action.payload;
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.cartUpdateStatus = false;
      })

      .addCase(updateOrders.pending, (state) => {
        state.cartUpdateStatus = true;
      })
      .addCase(updateOrders.fulfilled, (state, action) => {
        state.cartUpdateStatus = false;
        state.user = action.payload; 
      })
      .addCase(updateOrders.rejected, (state, action) => {
        state.cartUpdateStatus = false;
      })
      .addCase(updateWishlist.pending, (state) => {
        state.wishlistUpdateStatus = true;
      })
      .addCase(updateWishlist.fulfilled, (state, action) => {
        state.wishlistUpdateStatus = false;
        state.user = action.payload;
      })
      .addCase(updateWishlist.rejected, (state, action) => {
        state.wishlistUpdateStatus = false;
       
      });
  },
});

export const { logout } = userAuthSlice.actions;

export default userAuthSlice.reducer;
