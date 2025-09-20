import { createSlice } from '@reduxjs/toolkit'
import Product from '../Component/Product'

const initialState = {
  product: null,
    cart: 
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) 
    : [],
    whishlist: 
    localStorage.getItem('whishlist') ? JSON.parse(localStorage.getItem('whishlist')) 
    : [],
    subTotal: 0
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
      }
      
    },

    RemoveCartReducer: (state, action) => {
      state.cart.splice(action.payload.id,1)
      localStorage.setItem('cart', JSON.stringify([...state.cart]));
      
    },

    wishlistReducer:  (state, action) => {
      const findindex = state.cart.findIndex((item)=> item.id == action.payload.id)

      if(findindex == -1){
         state.whishlist = [...state.whishlist, action.payload];
         localStorage.setItem('whishlist', JSON.stringify([...state.whishlist])); 
      }
      
    },
    

     QuentityUpdate: (state, action) => {
      const item = state.cart[action.payload.id];
      if(action.payload.actionname == "increment") {
          item.quan++
          localStorage.setItem('cart', JSON.stringify([...state.cart]));
      }else{
         if (item.quan > 1) {
          item.quan--;
          localStorage.setItem('cart', JSON.stringify([...state.cart]));
         }
          
      }
    },
    
    SubTotalReducer:(state)=>{
      state.subTotal = state.cart.reduce((intial, item) => 
         intial + item.quan  * item.price,0
      )

    }


    
  },
})

// Action creators are generated for each case reducer function
export const { productReducer, FilterReducer,CartReducer,RemoveCartReducer,wishlistReducer,QuentityUpdate, SubTotalReducer} = ProductSlice.actions

export default ProductSlice.reducer