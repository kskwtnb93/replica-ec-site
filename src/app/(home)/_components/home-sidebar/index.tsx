import CategorySection from '@/app/(home)/_components/home-sidebar/sections/category-section'
import ReduxProvider from '@/app/_components/redux-provider'

import type { SecondCategoryType, ThirdCategoryType } from '@/types/category'

type Props = {
  secondCategories: SecondCategoryType[]
  thirdCategories: ThirdCategoryType[]
}

export default function HomeSidebar({
  secondCategories,
  thirdCategories,
}: Props) {
  return (
    <aside>
      {/* <h2
        className={css`
          font-weight: bold;
          text-overflow: ellipsis;
          word-break: break-word;
          word-wrap: normal;
          font-size: 2rem;
          line-height: 1.7;
          color: #2d2d2d;
          margin-bottom: 1.5rem;
        `}
      >
        アイテムを探す
      </h2> */}

      <ReduxProvider>
        <CategorySection
          secondCategories={secondCategories}
          thirdCategories={thirdCategories}
        />
      </ReduxProvider>
    </aside>
  )
}
