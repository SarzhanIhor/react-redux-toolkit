import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import axios from "axios";

const url = "https://raw.githubusercontent.com/SarzhanIhor/react-redux-toolkit/main/data/cart.json"
// console.log(url);

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

export const getCartItems = createAsyncThunk(
    "cart/getCartItems",
    async(_, thunkAPI) => {
        try {
            // console.log(thunkAPI.getState());
            const response = await axios(url)
            // console.log(response.data);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("something wrong")
        }
    }
)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: state => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
            // console.log(itemId);
        }, 
        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount = cartItem.amount + 1
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotals: (state) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        }
    }, 
    extraReducers: builder => {
        builder
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.isLoading = false
                state.cartItems = action.payload
            })
            .addCase(getCartItems.pending, state => {
                state.isLoading = true
            })
            .addCase(getCartItems.rejected, state => {
                state.isLoading = false
            })
    }
})


// console.log(cartSlice);

export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions
export default cartSlice.reducer