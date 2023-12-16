import { css } from '@kuma-ui/core'
import { TAX_RATE } from '@/utils/constants'

import type { ProductContentsType } from '@/types/product'

type Props = {
  product: ProductContentsType[]
}

export default function ProductInfo({ product }: Props) {
  const taxIncludedPrice = product.price + product.price * TAX_RATE
  const formattedPrice: string = (taxIncludedPrice as number).toLocaleString()

  return (
    <div>
      {/** ブランド名 */}
      <p
        className={css`
          font-size: 1.4rem;
          line-height: 1.35714;
          font-weight: bold;
          color: #23abdd;

          @media (max-width: 576px) {
            font-size: 1.3rem;
            line-height: 1.76923;
          }
        `}
      >
        {product.brand_name}
      </p>

      {/** 商品名 */}
      <h1
        className={css`
          font-size: 1.8rem;
          line-height: 1.6;
          font-weight: bold;
          margin-top: 1rem;

          @media (max-width: 576px) {
            margin-top: 1.5rem;
            font-size: 1.4rem;
          }
        `}
      >
        {product.name}
      </h1>

      {/** 値段 */}
      <p
        className={css`
          font-size: 2.5rem;
          line-height: 1;
          font-weight: bold;
          margin-top: 2rem;

          @media (max-width: 576px) {
            margin-top: 2.5rem;
          }
        `}
      >
        ¥{formattedPrice}
        <span
          className={css`
            font-size: 1.1rem;
            line-height: 1;
            margin-left: 0.5rem;

            @media (max-width: 576px) {
              font-size: 1rem;
            }
          `}
        >
          税込
        </span>
      </p>
    </div>
  )
}
