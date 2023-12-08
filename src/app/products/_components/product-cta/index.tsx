import ReduxProvider from '@/app/_components/redux-provider'
import AddToCart from '@/app/products/_components/product-cta/add-to-cart'

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
