import { css } from '@kuma-ui/core'
import Card from '@/components/product-list/card'

import type { ProductContentsType } from '@/types/products'

type Props = {
  products: ProductContentsType[]
}

export default async function ProductList({ products }: Props) {
  return (
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
  )
}
