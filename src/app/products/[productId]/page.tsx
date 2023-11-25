import Container from '@/components/layouts/container'
import ProductSlider from '@/components/products/product-slider'
import { fetchProduct } from '@/utils/product'

import type { ProductContentsType, ImageType } from '@/types/product'

type PageProps = {
  params: {
    productId: string
  }
}

export default async function Page({ params }: PageProps) {
  const product: ProductContentsType[] = await fetchProduct(
    params.productId,
    'no-store'
  )
  const images: ImageType[] = product.images
  images.unshift(product.main_image)

  return (
    <div>
      <ProductSlider images={images} />

      <Container></Container>
    </div>
  )
}
