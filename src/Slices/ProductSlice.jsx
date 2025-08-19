import { createSlice } from '@reduxjs/toolkit'
import Product from '../Component/Product'

const initialState = {
  product: null,
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
  },
})

// Action creators are generated for each case reducer function
export const { productReducer, FilterReducer} = ProductSlice.actions

export default ProductSlice.reducer