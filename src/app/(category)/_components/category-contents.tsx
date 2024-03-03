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
  const fields = ['id', 'main_image', 'description', 'brand_name', 'price']
  let filters = ''
  const filters1 = `${filterCategoryHierarchy}[equals]${filterCategoryId}`

  if (params.firstCategoryId === 'all') {
    filters = `${filters1}`
  } else {
    // params.firstCategoryId が 'all' 以外の場合は、firstCategory でもフィルタリングする
    const filters2 = `(firstCategory[contains]all[or]firstCategory[contains]${params.firstCategoryId})`
    filters = `${filters1}[and]${filters2}`
  }

  const filteredProducts: ProductContentsType[] = await fetchProducts(
    100,
    0,
    fields,
    filters
  )

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
