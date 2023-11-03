import type {
  FirstCategoryType,
  SecondCategoryType,
  ThirdCategoryType,
} from '@/types/categories'

/**
 * all, men, women
 * などの１階層目（性別）のカテゴリー一覧を取得する
 */
export async function getFirstCategories(
  cache: 'force-cache' | 'no-store'
): Promise<FirstCategoryType[]> {
  const endPoint =
    process.env.PUBLIC_NEXT_URL + '/api/categories/first-categories'
  const cacheValue = cache || ''
  const options = { method: 'GET', cache: cacheValue }

  const data: FirstCategoryType[] = await fetch(endPoint, options).then((res) =>
    res.json()
  )

  return data
}

/**
 * tops, jacket-outerwear, pants
 * などの２階層目のカテゴリー一覧を取得する
 */
export async function getSecondCategories(
  cache: 'force-cache' | 'no-store'
): Promise<SecondCategoryType[]> {
  const endPoint =
    process.env.PUBLIC_NEXT_URL + '/api/categories/second-categories'
  const cacheValue = cache || ''
  const options = { method: 'GET', cache: cacheValue }

  const data: SecondCategoryType[] = await fetch(endPoint, options).then(
    (res) => res.json()
  )

  return data
}

/**
 * tshirt-cutsew, denim-pants, trench-coat, etc...
 * などの３階層目のカテゴリー一覧を取得する
 */
export async function getThirdCategories(
  parentId: string,
  cache: 'force-cache' | 'no-store'
): Promise<ThirdCategoryType[]> {
  const endPoint =
    process.env.PUBLIC_NEXT_URL + '/api/categories/third-categories/' + parentId
  const cacheValue = cache || ''
  const options = { method: 'GET', cache: cacheValue }

  const data: ThirdCategoryType[] = await fetch(endPoint, options).then((res) =>
    res.json()
  )

  return data
}

/**
 * カテゴリー一覧の配列から引数の id に一致した、
 * { id: 'women', en_name: 'WOMENS', ja_name: 'レディース', color: '#f26868' }
 * などのような単一のオブジェクトを取得する
 */
export async function getCategory<T extends { id: string }>(
  id: string,
  categories: T[]
): Promise<T | undefined> {
  const category = categories.find((category) => category.id === id)
  return category
}
