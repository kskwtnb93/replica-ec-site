'use client'

import { css } from '@kuma-ui/core'
import { useSelector } from 'react-redux'

import CartItem from '@/app/cart/_components/cart-details/cart-item'
import {
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalQuantity,
} from '@/redux/slices/cart'
import { TAX_RATE } from '@/utils/constants'

import type { ProductContentsWithQuantityType } from '@/types/product'

type CartStateType = {
  cartItems: ProductContentsWithQuantityType[]
  cartTotalQuantity: number
  cartTotalPrice: number
}

export default function CartDetailsBody() {
  const { cartItems }: CartStateType = useSelector(selectCartItems)
  const { cartTotalQuantity }: CartStateType = useSelector(
    selectCartTotalQuantity
  )
  const { cartTotalPrice }: CartStateType = useSelector(selectCartTotalPrice)

  const taxIncludedTotalPrice = cartTotalPrice + cartTotalPrice * TAX_RATE
  const formattedTotalPrice: string = (
    taxIncludedTotalPrice as number
  ).toLocaleString()

  return (
    <div>
      <p
        className={css`
          font-size: 1.6rem;
          line-height: 1.3125;
          margin-bottom: 1.5rem;
        `}
      >
        カートに入っている商品: {cartTotalQuantity}点
      </p>

      <div
        className={css`
          border-top: 0.1rem solid #f3f3f3;
        `}
      >
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <dl
        className={css`
          display: flex;
          align-items: center;
          padding: 1.5rem 0;
        `}
      >
        <dt
          className={css`
            width: 25%;
            font-size: 17px;
            line-height: 1.294117647058824;
          `}
        >
          商品合計
        </dt>
        <dd
          className={css`
            flex: 1;
            display: flex;
            justify-content: flex-end;
            font-size: 21px;
            line-height: 1.238095238095238;
            padding-left: 1.5rem;
          `}
        >
          ¥{formattedTotalPrice}
        </dd>
      </dl>
    </div>
  )
}
