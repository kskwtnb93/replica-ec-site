import { css } from '@kuma-ui/core'
import Tab from '@/components/home/gender-tabs/tab'
import ReduxProvider from '@/components/redux-provider'
import { getFirstCategories } from '@/utils/categories'

import type { FirstCategory } from '@/types/categories'

export default async function GenderTabs() {
  const categories: FirstCategory[] = await getFirstCategories('no-store')

  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1rem 0;
      `}
    >
      <ReduxProvider>
        {categories.map((category) => (
          <Tab key={category.id} {...category} />
        ))}
      </ReduxProvider>
    </div>
  )
}
