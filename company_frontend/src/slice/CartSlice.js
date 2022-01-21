import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
  
  export const promoFetch = createAsyncThunk(
    "promo/promoFetch", 
    async (id = null, { rejectWithValue }) => {
      try {
        const response = await axios.get("http://localhost:8000/api/promocodes/");
        return response?.data;
      } catch (error) {
        return rejectWithValue("error occured");
      }
    }
  );
  

const initialState = {
  cartItems:[],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  promo:"",
  promocodes:[]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } 
      else {
        const temProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temProduct);
      }
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

      } 
      else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
     }
    },
    clearCart(state, action) {
      state.cartItems = [];
    },
    getPromo(state,action){
      state.promo=action.payload
    },
    getTotal(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      )
      for (let i=0;i<state.promocodes.length;i++){
            if (state.promocodes[i].promocode===state.promo && total>5000 && i!=1 ){
              total=total-(total*((state.promocodes[i].promovalue)/100))
              break
            }
            if 
            (state.promocodes[i].promocode===state.promo && total>10000){
              total=total-(total*((state.promocodes[i].promovalue)/100))
              break
            }
      }
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
  
  extraReducers: {
    [promoFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [promoFetch.fulfilled]: (state, action) => {
      state.status = "sucess";
      state.promocodes = action.payload;
    },
    [promoFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal,getPromo } =
  cartSlice.actions;

export default cartSlice.reducer;
