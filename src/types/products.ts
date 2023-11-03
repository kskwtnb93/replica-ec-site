export interface ProductsType {
  contents: ProductContentsType[]
  totalCount: number
  offset: number
  limit: number
}

export interface ProductContentsType {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  brand_name: string
  name: string
  firstCategory: string[]
  secondCategory: string
  thirdCategory: string
  main_image: ImageType
  images: ImageType[]
  price: number
  description: string
}

export interface ImageType {
  url: string
  height: number
  width: number
}
