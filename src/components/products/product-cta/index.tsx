import AddToCart from '@/components/products/product-cta/add-to-cart'
import ReduxProvider from '@/components/redux-provider'

import type { ProductContentsType } from '@/types/product'

type Props = {
  product: ProductContentsType[]
}

export default function ProductCta({ product }: Props) {
  return (
    <ReduxProvider>
      <AddToCart product={product} />
    </ReduxProvider>
  )
}
