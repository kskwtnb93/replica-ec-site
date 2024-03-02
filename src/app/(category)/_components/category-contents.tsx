import { css } from '@kuma-ui/core'
import CategorySidebar from '@/app/_components/category-sidebar'
import Heading from '@/app/_components/heading'
import TwoColumn from '@/app/_components/layouts/columns/two-column'
import ProductList from '@/app/_components/product-list'
import { fetchProducts } from '@/utils/product'

import type {
  FirstCategoryType,
  SecondCategoryType,
  ThirdCategoryType,
} from '@/types/category'
import type { ProductContentsType } from '@/types/product'

type Props = {
  HeadingText: string
  filterCategoryHierarchy: string
  filterCategoryId: string
  params: {
    firstCategoryId: string
    secondCategoryId: string
    thirdCategoryId?: string | undefined
  }
  firstCategories: FirstCategoryType[]
  secondCategories: SecondCategoryType[]
  thirdCategories: ThirdCategoryType[]
}

export default async function CategoryContents({
  HeadingText,
  filterCategoryHierarchy,
  filterCategoryId,
  params,
  firstCategories,
  secondCategories,
  thirdCategories,
}: Props) {
  const products: ProductContentsType[] = await fetchProducts()
  const filteredProducts = products.filter((product) => {
    if (
      (typeof product.firstCategory !== 'undefined' &&
        filterCategoryHierarchy === 'secondCategory') ||
      filterCategoryHierarchy === 'thirdCategory'
    ) {
      // all 以外のカテゴリーは性別カテゴリー filter する条件を追加
      if (params.firstCategoryId === 'all') {
        return product[filterCategoryHierarchy] === filterCategoryId
      } else {
        return (
          // product.firstCategory のみ microCMS の都合で配列で返ってくるため [0] で取り出してます
          product.firstCategory[0] === params.firstCategoryId &&
          product[filterCategoryHierarchy] === filterCategoryId
        )
      }
    }
    return false // 未定義の場合はフィルタリングしない
  })

  return (
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
            <Heading as="h1" text={HeadingText} />
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
  )
}
