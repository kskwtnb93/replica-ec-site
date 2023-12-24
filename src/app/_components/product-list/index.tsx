import { css } from '@kuma-ui/core'
import Card from '@/app/_components/product-list/card'

import type { ProductContentsType } from '@/types/product'
type Props = {
  products: ProductContentsType[]
}

export default function ProductList({ products }: Props) {
  return products.length ? (
    <ul
      className={css`
        display: grid;
        gap: 3rem 3.8rem;
        grid-template-columns: 1fr 1fr 1fr;

        @media (max-width: 1020px) {
          gap: calc(30 / 1020 * 100vw) calc(38 / 1020 * 100vw);
        }

        @media (max-width: 576px) {
          gap: 0;
        }
      `}
    >
      {products.map((product, index) => (
        <Card
          key={product.id}
          product={product}
          imagePriority={index < 10 ? true : false}
        />
      ))}
    </ul>
  ) : (
    <div
      className={css`
        @media (max-width: 576px) {
          padding: 0 2rem;
        }
      `}
    >
      <p
        className={css`
          font-size: 1.5rem;
          color: #ed293e;
          line-height: 1.6;

          @media (max-width: 576px) {
            text-align: center;
          }
        `}
      >
        条件に一致する商品は見つかりませんでした。
      </p>
    </div>
  )
}
