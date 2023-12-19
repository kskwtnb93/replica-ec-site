import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '@/redux/store'

import type {
  ProductContentsWithQuantityType,
  ProductContentsType,
} from '@/types/product'

type CartState = {
  cartItems: ProductContentsWithQuantityType[]
  cartTotalQuantity: number
  cartTotalPrice: number
}

const initialState: CartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductContentsType>) => {
      // カートの中に同じidの商品があるかチェック
      // サイズや色など商品の属性を細分化する必要があれば都度処理を追加する必要あり
      const duplicateId = state.cartItems.find(
        (product) => product.id === action.payload.id
      )

      if (duplicateId) {
        // 同じidを持つオブジェクトがある場合、そのidの商品の個数quantityを更新
        state.cartItems = state.cartItems.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      } else {
        // 同じidを持つオブジェクトがない場合、個数quantityを商品オブジェクトに追加し配列の中に商品を追加
        state.cartItems = [
          { ...action.payload, quantity: 1 },
          ...state.cartItems,
        ]
      }

      // カート内商品の合計数量を更新
      state.cartTotalQuantity = state.cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      )

      // カート内商品の合計金額を更新
      state.cartTotalPrice = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )

      // console.log('cartItems', state.cartItems)
      // console.log('cartTotalQuantity', state.cartTotalQuantity)
      // console.log('cartTotalPrice', state.cartTotalPrice)
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      // 受け取ったidの商品オブジェクトの個数を+1する
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      // カート内商品の合計数量を更新
      state.cartTotalQuantity = state.cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      )

      // カート内商品の合計金額を更新
      state.cartTotalPrice = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )

      // console.log('cartItems', state.cartItems)
      // console.log('cartTotalQuantity', state.cartTotalQuantity)
      // console.log('cartTotalPrice', state.cartTotalPrice)
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      // 受け取ったidの商品オブジェクトの個数を-1する
      // 個数quantityが残り1の場合は個数を変更しない
      state.cartItems = state.cartItems.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )

      // カート内商品の合計数量を更新
      state.cartTotalQuantity = state.cartItems.reduce(
        (sum, product) => sum + product.quantity,
        0
      )

      // カート内商品の合計金額を更新
      state.cartTotalPrice = state.cartItems.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      )

      // console.log('cartItems', state.cartItems)
      // console.log('cartTotalQuantity', state.cartTotalQuantity)
      // console.log('cartTotalPrice', state.cartTotalPrice)
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      // 受け取ったidの商品オブジェクトを配列から削除
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )

      // カート内商品の合計数量を更新
      state.cartTotalQuantity = state.cartItems.reduce(
        (sum, product) => sum + product.quantity,
        0
      )

      // カート内商品の合計金額を更新
      state.cartTotalPrice = state.cartItems.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      )

      // console.log('cartItems', state.cartItems)
      // console.log('cartTotalQuantity', state.cartTotalQuantity)
      // console.log('cartTotalPrice', state.cartTotalPrice)
    },
  },
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeCartItem,
} = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cartItems
export const selectCartTotalQuantity = (state: RootState) =>
  state.cartTotalQuantity
export const selectCartTotalPrice = (state: RootState) => state.cartTotalPrice

export default cartSlice.reducer
