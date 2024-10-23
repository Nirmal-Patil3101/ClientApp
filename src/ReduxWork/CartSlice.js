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
      let fid = action.payload.fid;
      state.cartItems = state.cartItems.filter((item) => item.id != fid);
    },
    increQty: (state, action) => {
      let client = state.cartItems.find((itm) => itm.id == action.payload.fid);
      client.Qty += 1;
    },
    decreQty: (state, action) => {
      let client = state.cartItems.find((itm) => itm.id == action.payload.fid);
      if (client.Qty === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id != client.id
        );
      } else {
        client.Qty -= 1;
      }
    },
    calcluateTotal: (state) => {
      let totalAmount = 0;
      state.cartItems.forEach((client) => {
        totalAmount += client.dprice * client.Qty;
      });
      state.cartTotal = totalAmount;
    },
  },
});
export const { addItem, removeItem, calcluateTotal, increQty, decreQty } =
  carteSlice.actions;
export default carteSlice.reducer;
