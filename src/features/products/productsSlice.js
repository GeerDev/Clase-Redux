import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
  products: [],
  isLoading: false,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
          }      
    },
    extraReducers: (builder) => {
      builder.addCase(getAll.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      builder.addCase(getAll.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(like.fulfilled, (state, action) => {
        const products = state.products.map((product) => {
            console.log("Estado de Producto", product._id);
            console.log("Respuesta Back", action.payload._id)
          if (product._id === action.payload._id) {
            product = action.payload;
          }
          return product
      })
      state.products = products
    });

    }
  });

export const getAll = createAsyncThunk("products/getAll", async () => {
  try {
    return await productsService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const like = createAsyncThunk("products/like", async (_id) => {
    try {
      return await productsService.like(_id);
    } catch (error) {
      console.error(error);
    }
  });  

export const { reset } = productsSlice.actions;
export default productsSlice.reducer;