import type {
  FirstCategory,
  SecondCategory,
  ThirdCategory,
} from '@/types/categories'

export async function getFirstCategories(
  cache: 'force-cache' | 'no-store'
): Promise<FirstCategory[]> {
  const endPoint =
    process.env.PUBLIC_NEXT_URL + '/api/categories/first-categories'
  const cacheValue = cache || ''
  const options = { method: 'GET', cache: cacheValue }

  const data: FirstCategory[] = await fetch(endPoint, options).then((res) =>
    res.json()
  )

  return data
}

export async function getSecondCategories(
  cache: 'force-cache' | 'no-store'
): Promise<SecondCategory[]> {
  const endPoint =
    process.env.PUBLIC_NEXT_URL + '/api/categories/second-categories'
  const cacheValue = cache || ''
  const options = { method: 'GET', cache: cacheValue }

  const data: SecondCategory[] = await fetch(endPoint, options).then((res) =>
    res.json()
  )

  return data
}

export async function getThirdCategories(
  parentId: string,
  cache: 'force-cache' | 'no-store'
): Promise<ThirdCategory[]> {
  const endPoint =
    process.env.PUBLIC_NEXT_URL + '/api/categories/third-categories/' + parentId
  const cacheValue = cache || ''
  const options = { method: 'GET', cache: cacheValue }

  const data: ThirdCategory[] = await fetch(endPoint, options).then((res) =>
    res.json()
  )

  return data
}

export async function getCategory<T extends { id: string }>(
  id: string,
  categories: T[]
): Promise<T | undefined> {
  const category = categories.find((category) => category.id === id)
  return category
}
