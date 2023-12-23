import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '@/redux/store'

import type {
  ProductContentsWithQuantityType,
  ProductContentsType,
} from '@/types/product'

interface ChildType {
  items: ProductContentsWithQuantityType[]
  totalQuantity: number
  totalPrice: number
}

interface CartStateType {
  cart: ChildType
}

const initialState: CartStateType = {
  cart: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductContentsType>) => {
      // カートの中に同じidの商品があるかチェック
      // サイズや色など商品の属性を細分化する必要があれば都度処理を追加する必要あり
      const duplicateId = state.cart.items.find(
        (product) => product.id === action.payload.id
      )

      if (duplicateId) {
        // 同じidを持つオブジェクトがある場合、そのidの商品の個数quantityを更新
        state.cart.items = state.cart.items.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      } else {
        // 同じidを持つオブジェクトがない場合、個数quantityを商品オブジェクトに追加し配列の中に商品を追加
        state.cart.items = [
          { ...action.payload, quantity: 1 },
          ...state.cart.items,
        ]
      }

      // カート内商品の合計数量を更新
      state.cart.totalQuantity = state.cart.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      )

      // カート内商品の合計金額を更新
      state.cart.totalPrice = state.cart.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )

      // console.log('items', state.cart.items)
      // console.log('totalQuantity', state.cart.totalQuantity)
      // console.log('totalPrice', state.cart.totalPrice)
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      // 受け取ったidの商品オブジェクトの個数を+1する
      state.cart.items = state.cart.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      // カート内商品の合計数量を更新
      state.cart.totalQuantity = state.cart.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      )

      // カート内商品の合計金額を更新
      state.cart.totalPrice = state.cart.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )

      // console.log('items', state.cart.items)
      // console.log('totalQuantity', state.cart.totalQuantity)
      // console.log('totalPrice', state.cart.totalPrice)
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      // 受け取ったidの商品オブジェクトの個数を-1する
      // 個数quantityが残り1の場合は個数を変更しない
      state.cart.items = state.cart.items.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )

      // カート内商品の合計数量を更新
      state.cart.totalQuantity = state.cart.items.reduce(
        (sum, product) => sum + product.quantity,
        0
      )

      // カート内商品の合計金額を更新
      state.cart.totalPrice = state.cart.items.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      )

      // console.log('items', state.cart.items)
      // console.log('totalQuantity', state.cart.totalQuantity)
      // console.log('totalPrice', state.cart.totalPrice)
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      // 受け取ったidの商品オブジェクトを配列から削除
      state.cart.items = state.cart.items.filter(
        (item) => item.id !== action.payload
      )

      // カート内商品の合計数量を更新
      state.cart.totalQuantity = state.cart.items.reduce(
        (sum, product) => sum + product.quantity,
        0
      )

      // カート内商品の合計金額を更新
      state.cart.totalPrice = state.cart.items.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
      )

      // console.log('items', state.cart.items)
      // console.log('totalQuantity', state.cart.totalQuantity)
      // console.log('totalPrice', state.cart.totalPrice)
    },
  },
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeCartItem,
} = cartSlice.actions

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
