import type { ProductContentsType, ProductsType } from '@/types/product'

export async function fetchProducts(
  limit: number = 100,
  offset: number = 0,
  fields: string[] | never[] = []
): Promise<ProductContentsType[]> {
  const fieldsText = fields.length ? fields.join(',') : ''
  let endPoint =
    process.env.PRODUCTS_API_URL + `products?limit=${limit}&offset=${offset}`

  if (fieldsText) {
    endPoint =
      process.env.PRODUCTS_API_URL +
      `products?fields=` +
      fieldsText +
      `&limit=${limit}&offset=${offset}`
  }

  const headers = new Headers()
  headers.append('X-MICROCMS-API-KEY', process.env.PRODUCTS_API_KEY || '')

  const data: ProductsType = await fetch(endPoint, { headers }).then((res) =>
    res.json()
  )

  if (data.offset + data.limit < data.totalCount) {
    const contents = await fetchProducts(
      data.limit,
      data.offset + data.limit,
      fields
    )
    return [...data.contents, ...contents]
  }

  return data.contents
}
