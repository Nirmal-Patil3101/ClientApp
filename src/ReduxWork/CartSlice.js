import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
};

const carteSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let newItem = { ...action.payload, Qty: 1 };
      state.cartItems = [...state.cartItems, newItem];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item._id != action.payload.fid);
    },
    increQty: (state, action) => {
      let food = state.cartItems.find((itm) => itm._id == action.payload.fid);
      food.Qty += 1;
    },

    decreQty: (state, action) => {
      let dish = state.cartItems.find((itm) => itm._id == action.payload.fid);
      if (dish.Qty === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id != dish._id
        );
      } else {
        dish.Qty -= 1;
      }
    },
    calculateTotal: (state) => {
      let totalAmount = 0;
      state.cartItems.forEach((client) => {
        totalAmount += client.dprice * client.Qty;
      });
      state.cartTotal = totalAmount;
    },
    
  },
});
export const { addItem, removeItem, calculateTotal, increQty, decreQty } =
  carteSlice.actions;
export default carteSlice.reducer;
