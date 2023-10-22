export interface Products {
  contents: ProductContents[]
  totalCount: number
  offset: number
  limit: number
}

export interface ProductContents {
  id?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  revisedAt?: string
  brand_name?: string
  name?: string
  firstCategory?: string[]
  secondCategory?: string
  thirdCategory?: string
  main_image?: Image
  images?: Image[]
  price?: number
  description?: string
}

export interface Image {
  url: string
  height: number
  width: number
}
