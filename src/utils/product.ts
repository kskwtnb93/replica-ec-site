import type { ProductContentsType, ProductsType } from '@/types/product'

/**
 * @param cache - 詳細は Next.js のドキュメントを確認 → https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#caching-data
 * @param etc - その他は MicroCMS クエリパラメータを参照　　→ https://document.microcms.io/content-api/get-list-contents
 */
export async function fetchProducts(
  limit: number = 100,
  offset: number = 0,
  fields: string[] | never[] = [],
  filters: string = '',
  cache:
    | 'force-cache'
    | 'no-store'
    | { next: { revalidate: number } } = 'no-store'
): Promise<ProductContentsType[]> {
  try {
    let endPoint =
      process.env.PRODUCTS_API_URL + `products?limit=${limit}&offset=${offset}`

    // limit と offset 以外に指定があれば、クエリパラメータを endPoint に連結していく
    const fieldsText = fields.length ? fields.join(',') : ''
    if (fieldsText) endPoint += `&fields=${fieldsText}`
    if (filters) endPoint += `&filters=${filters}`

    const options: {
      headers?: Headers
      cache?: 'force-cache' | 'no-store'
      next?: { revalidate: number }
    } = {}

    const headers = new Headers()
    headers.append('X-MICROCMS-API-KEY', process.env.PRODUCTS_API_KEY || '')
    options.headers = headers

    if (typeof cache === 'object') {
      if (cache.next) options.next = cache.next
    } else {
      options.cache = cache
    }

    const data: ProductsType = await fetch(endPoint, options).then((res) =>
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
  } catch (error) {
    console.error('Error during fetchProducts:', error)
    throw error
  }
}

export async function fetchProduct(
  productId: string,
  cache:
    | 'force-cache'
    | 'no-store'
    | { next: { revalidate: number } } = 'no-store'
): Promise<ProductContentsType> {
  try {
    const endPoint = process.env.PRODUCTS_API_URL + `products/${productId}`
    const options: {
      headers?: Headers
      cache?: 'force-cache' | 'no-store'
      next?: { revalidate: number }
    } = {}

    const headers = new Headers()
    headers.append('X-MICROCMS-API-KEY', process.env.PRODUCTS_API_KEY || '')
    options.headers = headers

    if (typeof cache === 'object') {
      if (cache.next) options.next = cache.next
    } else {
      options.cache = cache
    }

    const res = await fetch(endPoint, options)

    if (!res.ok) {
      throw new Error(`Failed to fetch product data. Status: ${res.status}`)
    }

    return res.json() as Promise<ProductContentsType>
  } catch (error) {
    console.error('Error during fetchProduct:', error)
    throw error
  }
}
