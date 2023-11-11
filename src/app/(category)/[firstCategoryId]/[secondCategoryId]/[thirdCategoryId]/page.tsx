import { Box, css } from '@kuma-ui/core'
import { notFound } from 'next/navigation'

import Breadcrumb from '@/components/breadcrumb'
import TwoColumn from '@/components/columns/two-column'
import Container from '@/components/layouts/container'
import ProductList from '@/components/product-list'
import {
  fetchFirstCategories,
  fetchSecondCategories,
  fetchThirdCategories,
  getCategory,
} from '@/utils/category'
import { getProducts } from '@/utils/product'

import type { BreadcrumbType } from '@/types'
import type {
  FirstCategoryType,
  SecondCategoryType,
  ThirdCategoryType,
} from '@/types/category'

import type { ProductContentsType } from '@/types/product'
type PageProps = {
  params: {
    firstCategoryId: string
    secondCategoryId: string
    thirdCategoryId: string
  }
}

export default async function Page({ params }: PageProps) {
  const firstCategories: FirstCategoryType[] =
    await fetchFirstCategories('no-store')
  const firstCategory: FirstCategoryType | undefined = await getCategory(
    params.firstCategoryId,
    firstCategories
  )
  const secondCategories: SecondCategoryType[] =
    await fetchSecondCategories('no-store')
  const secondCategory: SecondCategoryType | undefined = await getCategory(
    params.secondCategoryId,
    secondCategories
  )

  if (!firstCategory || !secondCategory) return notFound()

  const thirdCategories: ThirdCategoryType[] = await fetchThirdCategories(
    params.secondCategoryId,
    'no-store'
  )
  const thirdCategory: ThirdCategoryType | undefined = await getCategory(
    params.thirdCategoryId,
    thirdCategories
  )

  if (!thirdCategory) return notFound()

  const products: ProductContentsType[] = await getProducts()
  const filteredProducts = products.filter((product) => {
    if (typeof product.firstCategory !== 'undefined') {
      // all 以外のカテゴリーは性別カテゴリー filter する条件を追加
      if (params.firstCategoryId === 'all') {
        return product.thirdCategory === params.thirdCategoryId
      } else {
        return (
          // product.firstCategory のみ microCMS の都合で配列で返ってくるため [0] で取り出してます
          product.firstCategory[0] === params.firstCategoryId &&
          product.thirdCategory === params.thirdCategoryId
        )
      }
    }
    return false // 未定義の場合はフィルタリングしない
  })

  // パンくずコンポーネント用Propsを作成
  const lastBreadcrumbText =
    params.firstCategoryId === 'all'
      ? '対象商品'
      : `対象商品（性別：${firstCategory.ja_name}）`
  const breadcrumbData: BreadcrumbType[] = [
    {
      href: '/',
      text: 'MOMOTOWN',
    },
    {
      href: `/${firstCategory.id}/${secondCategory.id}/`,
      text: `${secondCategory.name}`,
    },
    {
      href: `/${firstCategory.id}/${secondCategory.id}/${thirdCategory.id}`,
      text: `${thirdCategory.name}`,
    },
    {
      href: '',
      text: lastBreadcrumbText,
    },
  ]

  return (
    <Container>
      <Box m="2.5rem 0 4rem">
        <Breadcrumb data={breadcrumbData} />
      </Box>
      <Box pb="8rem">
        <TwoColumn
          main={<ProductList products={filteredProducts} />}
          sidebar={
            <aside
              className={css`
                width: 180px;
                height: 100vh;
                background-color: #efefef;
              `}
            >
              サイドバー
            </aside>
          }
        />
      </Box>
    </Container>
  )
}
