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
  sex?: string[]
  category1?: string
  category2?: string
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
