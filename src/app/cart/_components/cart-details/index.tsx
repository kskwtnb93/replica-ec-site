'use client'

import { css } from '@kuma-ui/core'
import CartItem from '@/app/cart/_components/cart-details/cart-item'
import { TAX_RATE } from '@/utils/constants'

import type { ProductContentsWithQuantityType } from '@/types/product'

type Props = {
  items: ProductContentsWithQuantityType[]
  totalQuantity: number
  totalPrice: number
}

export default function CartDetails({
  items,
  totalQuantity,
  totalPrice,
}: Props) {
  const taxIncludedTotalPrice = totalPrice + totalPrice * TAX_RATE
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
        カートに入っている商品: {totalQuantity}点
      </p>

      <div
        className={css`
          border-top: 0.1rem solid #f3f3f3;
        `}
      >
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <dl
        className={css`
          display: flex;
          align-items: center;
          width: 32rem;
          padding: 1.5rem 0;
          margin-left: auto;

          @media (max-width: 768px) {
            width: inherit;
            padding: 1.5rem 0 2rem;
          }
        `}
      >
        <dt
          className={css`
            @media (min-width: 769px) {
              width: 12rem;
              text-align: right;
              font-size: 1.6rem;
            }

            @media (max-width: 768px) {
              width: 25%;
              font-size: 1.7rem;
              line-height: 1.294117647058824;
            }
          `}
        >
          商品合計
        </dt>
        <dd
          className={css`
            @media (min-width: 769px) {
              flex: 1;
              text-align: right;
              font-size: 1.6rem;
            }

            @media (max-width: 768px) {
              flex: 1;
              display: flex;
              justify-content: flex-end;
              font-size: 2.1rem;
              line-height: 1.238095238095238;
              padding-left: 1.5rem;
            }
          `}
        >
          ¥{formattedTotalPrice}
        </dd>
      </dl>
    </div>
  )
}
