import { Flex } from '@kuma-ui/core'
import Tab from '@/app/_components/gender-tabs/tab'
import ReduxProvider from '@/app/_components/redux-provider'

import type { FirstCategoryType } from '@/types/category'
type Props = {
  categories: FirstCategoryType[]
  isLink?: boolean
}

export default function GenderTabs({ categories, isLink }: Props) {
  return (
    <ReduxProvider>
      <Flex justify="space-between" alignItems="center" gap="1rem">
        {categories.map((category) => (
          <Tab key={category.id} category={category} isLink={isLink} />
        ))}
      </Flex>
    </ReduxProvider>
  )
}
