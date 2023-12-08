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
        gap: 30px 38px;
        grid-template-columns: 1fr 1fr 1fr;
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
    <p
      className={css`
        font-size: 1.5rem;
        color: #ed293e;
        line-height: 1.6;
      `}
    >
      条件に一致する商品は見つかりませんでした。
    </p>
  )
}
