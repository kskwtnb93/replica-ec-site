import { css } from '@kuma-ui/core'
import Tab from '@/components/category/category-gender-tabs/tab'

import type { FirstCategoryType } from '@/types/category'

type Props = {
  categories: FirstCategoryType[]
  active: string
}

export default function GenderTabs({ categories, active }: Props) {
  return (
    <ul
      className={css`
        display: flex;
        align-items: flex-end;
        gap: 0.5rem;
        border-bottom: 0.1rem solid rgba(45, 45, 45, 0.07);
      `}
    >
      {categories.map((category) => (
        <Tab key={category.id} {...category} active={active} />
      ))}
    </ul>
  )
}
