import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '@/redux/store'

import type { ProductContentsWithQuantityType } from '@/types/product'

type CartState = {
  cart: ProductContentsWithQuantityType[]
  cartTotalQuantity: number
}

const initialState: CartState = {
  cart: [],
  cartTotalQuantity: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<ProductContentsWithQuantityType>
    ) => {
      // カートの中に同じidの商品があるかチェック
      // サイズや色など商品の属性を細分化する必要があれば都度処理を追加する必要あり
      const duplicateId = state.cart.find(
        (product) => product.id === action.payload.id
      )

      if (duplicateId) {
        // 同じidを持つオブジェクトがある場合
        state.cart = state.cart.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      } else {
        // 同じidを持つオブジェクトがない場合
        state.cart = [{ ...action.payload, quantity: 1 }, ...state.cart]
      }

      // カート内商品の合計数量を更新
      state.cartTotalQuantity = state.cart.reduce(
        (sum, product) => sum + product.quantity,
        0 // sumの初期値
      )

      console.log('state.cart', state.cart)
      console.log('state.cartTotalQuantity', state.cartTotalQuantity)
    },
  },
})

export const { addToCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart
export const selectCartTotalQuantity = (state: RootState) =>
  state.cartTotalQuantity

export default cartSlice.reducer
