import { Box, Flex } from '@kuma-ui/core'
import Tab from '@/components/home/gender-tabs/tab'
import ReduxProvider from '@/components/redux-provider'

import type { FirstCategoryType } from '@/types/categories'

type Props = {
  categories: FirstCategoryType[]
}

export default function GenderTabs({ categories }: Props) {
  return (
    <ReduxProvider>
      <Box p="1rem 0">
        <Flex justify="space-between" alignItems="center" gap="1rem">
          {categories.map((category) => (
            <Tab key={category.id} {...category} />
          ))}
        </Flex>
      </Box>
    </ReduxProvider>
  )
}
