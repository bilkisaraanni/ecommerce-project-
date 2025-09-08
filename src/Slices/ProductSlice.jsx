import { createSlice } from '@reduxjs/toolkit'
import Product from '../Component/Product'

const initialState = {
  product: null,
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productReducer: (state, action) => {
      state.product = (action.payload)
    },
    
    FilterReducer: (state, action) => {
      state.product = (action.payload)
    },
    
     CartReducer: (state, action) => {
      const findindex = state.cart.findIndex((item)=> item.id == action.payload.id)

      if(findindex == -1){
         state.cart = [...state.cart, action.payload];
         localStorage.setItem('cart', JSON.stringify([...state.cart])); 
      }else{
        // console.log("data ase")
      }
      
    },

    RemoveCartReducer: (state, action) => {
      state.cart.splice(action.payload.id,1)
      localStorage.setItem('cart', JSON.stringify([...state.cart]));
      
    },

    // WishlistReducer: (state, action) => {
    //   state.cart.splice(action.payload.id,1)
    // },

     QuentityUpdate: (state, action) => {
      
      if(action.payload.actionname == "increment") {
          state.cart[action.payload.id].quan++
          localStorage.setItem('cart', JSON.stringify([...state.cart]));
      }else{
         state.cart[action.payload.id].quan--;
          localStorage.setItem('cart', JSON.stringify([...state.cart]));
      }
    },



    
  },
})

// Action creators are generated for each case reducer function
export const { productReducer, FilterReducer,CartReducer,RemoveCartReducer,WishlistReducer,QuentityUpdate} = ProductSlice.actions

export default ProductSlice.reducer