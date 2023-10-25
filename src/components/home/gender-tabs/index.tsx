import { css } from '@kuma-ui/core'
import Tab from '@/components/home/gender-tabs/tab'
import ReduxProvider from '@/components/redux-provider'

import type { FirstCategory } from '@/types/categories'

type Props = {
  categories: FirstCategory[]
}

export default async function GenderTabs({ categories }: Props) {
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
