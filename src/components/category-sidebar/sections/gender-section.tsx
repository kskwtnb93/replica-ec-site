import { css } from '@kuma-ui/core'
import Heading from '@/components/category-sidebar/sections/parts/heading'
import ListItem from '@/components/category-sidebar/sections/parts/list-item'

import type { FirstCategoryType } from '@/types/category'

type Props = {
  firstCategories: FirstCategoryType[]
  params: {
    firstCategoryId: string
    secondCategoryId: string
    thirdCategoryId?: string
  }
  borderTop: boolean
}

export default function GenderSection({
  firstCategories,
  params,
  borderTop,
}: Props) {
  const filteredFirstCategories = firstCategories.filter(
    (category) => category.id !== 'all'
  )

  const currentFirstCategory: string = params.firstCategoryId
  const currentSecondCategory: string = params.secondCategoryId
  const currentThirdCategory: string = params.thirdCategoryId
    ? params.thirdCategoryId
    : null

  let lastPath: string = `${currentSecondCategory}/`
  if (currentThirdCategory) {
    lastPath += `${currentThirdCategory}/`
  }

  return (
    <section
      className={
        !borderTop
          ? css`
              padding: 3rem 0;
            `
          : css`
              padding: 3rem 0;
              border-top: 0.1rem solid rgba(45, 45, 45, 0.05);
            `
      }
    >
      <Heading as="h2" text="性別" />

      <ul>
        {filteredFirstCategories.map((category) => (
          <ListItem
            key={category.id}
            text={category.ja_name}
            href={`/${category.id}/${lastPath}`}
            selected={category.id === currentFirstCategory}
            closeHandlerArg={`/all/${lastPath}`}
          />
        ))}
      </ul>
    </section>
  )
}
