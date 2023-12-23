import { css } from '@kuma-ui/core'
import { notFound } from 'next/navigation'

import CategorySidebar from '@/app/_components/category-sidebar'
import Heading from '@/app/_components/heading'
import TwoColumn from '@/app/_components/layouts/columns/two-column'
import Container from '@/app/_components/layouts/container'
import HasBreadcrumbLayout from '@/app/_components/layouts/has-breadcrumb-layout'
import ProductList from '@/app/_components/product-list'
import {
  fetchFirstCategories,
  fetchSecondCategories,
  fetchThirdCategories,
  getCategory,
} from '@/utils/category'
import { fetchProducts } from '@/utils/product'

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

  const products: ProductContentsType[] = await fetchProducts()
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
    <HasBreadcrumbLayout
      breadcrumbData={breadcrumbData}
      parentTag="article"
      bgColor="#f8f8f8"
    >
      <Container>
        <div
          className={css`
            padding-bottom: 8rem;

            @media (max-width: 576px) {
              padding-top: 3rem;
              padding-bottom: 0;
            }
          `}
        >
          <TwoColumn
            main={
              <div
                className={css`
                  @media (max-width: 576px) {
                    background-color: #fff;
                  }
                `}
              >
                <div
                  className={css`
                    margin-bottom: 3rem;

                    @media (max-width: 576px) {
                      margin-bottom: 3rem;
                    }
                  `}
                >
                  <Heading
                    as="h1"
                    text={
                      firstCategory.id !== 'all'
                        ? `${thirdCategory.name}（${firstCategory.ja_name}）`
                        : `${thirdCategory.name}`
                    }
                  />
                </div>

                <div
                  className={css`
                    @media (max-width: 576px) {
                      margin: 0 -2rem;
                    }
                  `}
                >
                  <ProductList products={filteredProducts} />
                </div>
              </div>
            }
            sidebar={
              <div
                className={css`
                  @media (max-width: 576px) {
                    display: none;
                  }
                `}
              >
                <CategorySidebar
                  productCount={filteredProducts.length}
                  firstCategories={firstCategories}
                  secondCategories={secondCategories}
                  thirdCategories={thirdCategories}
                  params={params}
                />
              </div>
            }
          />
        </div>
      </Container>
    </HasBreadcrumbLayout>
  )
}
