import { Flex } from '@kuma-ui/core'
import Tab from '@/app/(home)/_components/home-gender-tabs/tab'
import ReduxProvider from '@/app/_components/redux-provider'

import type { FirstCategoryType } from '@/types/category'

type Props = {
  categories: FirstCategoryType[]
}

export default function HomeGenderTabs({ categories }: Props) {
  return (
    <ReduxProvider>
      <Flex justify="space-between" alignItems="center" gap="1rem">
        {categories.map((category) => (
          <Tab key={category.id} {...category} />
        ))}
      </Flex>
    </ReduxProvider>
  )
}
