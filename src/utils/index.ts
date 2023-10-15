import { Categories1, Categories2, Categories3 } from '@/types/categories'
import { ProductContents, Products } from '@/types/products'

export async function getProducts(
  limit: number = 100,
  offset: number = 0,
  fields: string[] | never[] = []
): Promise<ProductContents[]> {
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

  const data: Products = await fetch(endPoint, { headers }).then((res) =>
    res.json()
  )

  if (data.offset + data.limit < data.totalCount) {
    const contents = await getProducts(
      data.limit,
      data.offset + data.limit,
      fields
    )
    return [...data.contents, ...contents]
  }

  return data.contents
}

export async function getCategories1(
  cache: 'force-cache' | 'no-store'
): Promise<Categories1[]> {
  const endPoint = process.env.PUBLIC_NEXT_URL + '/api/categories/categories1'
  const cacheValue = cache || ''
  const options = { method: 'GET', cache: cacheValue }

  const data: Categories1[] = await fetch(endPoint, options).then((res) =>
    res.json()
  )

  return data
}

export async function getCategories2(
  cache: 'force-cache' | 'no-store'
): Promise<Categories2[]> {
  const endPoint = process.env.PUBLIC_NEXT_URL + '/api/categories/categories2'
  const cacheValue = cache || ''
  const options = { method: 'GET', cache: cacheValue }

  const data: Categories2[] = await fetch(endPoint, options).then((res) =>
    res.json()
  )

  return data
}

export async function getCategories3(
  parentId: string,
  cache: 'force-cache' | 'no-store'
): Promise<Categories3[]> {
  const endPoint =
    process.env.PUBLIC_NEXT_URL + '/api/categories/categories3/' + parentId
  const cacheValue = cache || ''
  const options = { method: 'GET', cache: cacheValue }

  const data: Categories3[] = await fetch(endPoint, options).then((res) =>
    res.json()
  )

  return data
}
