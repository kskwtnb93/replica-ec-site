import { css } from '@kuma-ui/core'
import CategorySection from '@/app/_components/category-sidebar/sections/category-section'
import CountSection from '@/app/_components/category-sidebar/sections/count-section'
import GenderSection from '@/app/_components/category-sidebar/sections/gender-section'

import type {
  FirstCategoryType,
  SecondCategoryType,
  ThirdCategoryType,
} from '@/types/category'
type Props = {
  productCount: number
  firstCategories: FirstCategoryType[]
  secondCategories: SecondCategoryType[]
  thirdCategories: ThirdCategoryType[]
  params: {
    firstCategoryId: string
    secondCategoryId: string
    thirdCategoryId?: string | undefined
  }
}

export default function CategorySidebar({
  productCount,
  firstCategories,
  secondCategories,
  thirdCategories,
  params,
}: Props) {
  return (
    <aside
      className={css`
        background-color: #efefef;
        border-radius: 0.4rem;
      `}
    >
      <CountSection productCount={productCount} />

      <GenderSection
        firstCategories={firstCategories}
        params={params}
        borderTop={false}
      />

      <CategorySection
        secondCategories={secondCategories}
        thirdCategories={thirdCategories}
        params={params}
        borderTop={true}
      />

      {/* <section>
        <Heading as="h2" text="価格" />
      </section> */}
    </aside>
  )
}
