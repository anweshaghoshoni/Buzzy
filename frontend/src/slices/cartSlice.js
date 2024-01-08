import { createSlice } from '@reduxjs/toolkit'
// we are not using createApi because we are not dealing with async requests.
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : { cartItems: [], shippingAddress: [], payementMethod: 'Paypal' };



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const existItem = state.cartItems.find((x) => x._id === item._id);

            if(existItem){
                state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x);
            }
            else{
                state.cartItems = [...state.cartItems, item];//we are not using pushback beacause state is immutable
            }
            
            return updateCart(state);
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

            return updateCart(state);
        },
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            return updateCart(state);
        },
        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            return updateCart(state);
        },
        clearCartItems: (state, action) => {
            state.cartItems = [];
            return updateCart(state);
        }
    },
});

export const {
    addToCart, 
    removeFromCart, 
    saveShippingAddress, 
    savePaymentMethod,
    clearCartItems
    } = cartSlice.actions; //exporting as action

export default cartSlice.reducer;