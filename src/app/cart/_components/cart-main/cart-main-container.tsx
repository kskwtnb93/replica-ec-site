'use client'

import { css } from '@kuma-ui/core'
import { useSelector } from 'react-redux'

import CartDetails from '@/app/cart/_components/cart-details'
import CartEmptyContents from '@/app/cart/_components/cart-empty-contents.tsx'
import CartNextActions from '@/app/cart/_components/cart-next-actions'
import { selectCart } from '@/redux/slices/cart'

export interface CartStateType {
  items: ProductContentsWithQuantityType[]
  totalQuantity: number
  totalPrice: number
}

export default function CartMainContainer() {
  const { cart } = useSelector(selectCart)

  return cart.items.length <= 0 ? (
    <CartEmptyContents />
  ) : (
    <div
      className={css`
        @media (min-width: 769px) {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
      `}
    >
      <div
        className={css`
          @media (min-width: 769px) {
            width: calc(100% - 38rem);
          }

          @media (max-width: 1020px) {
            width: calc(100% - 380 / 1020 * 100vw);
          }

          @media (max-width: 768px) {
            width: inherit;
          }
        `}
      >
        <CartDetails
          items={cart.items}
          totalPrice={cart.totalPrice}
          totalQuantity={cart.totalQuantity}
        />
      </div>

      <div
        className={css`
          @media (min-width: 769px) {
            width: 34rem;
          }

          @media (max-width: 1020px) {
            width: calc(340 / 1020 * 100vw);
          }

          @media (max-width: 768px) {
            width: inherit;
            padding: 1.5rem 0 3rem;
            margin-left: 0;
          }
        `}
      >
        <CartNextActions />
      </div>
    </div>
  )
}
