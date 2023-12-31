'use client'

import { css } from '@kuma-ui/core'
import { useRouter } from 'next/navigation'

import Heading from '@/app/_components/category-sidebar/sections/parts/heading'
import ListItem from '@/app/_components/category-sidebar/sections/parts/list-item'

import type { SecondCategoryType, ThirdCategoryType } from '@/types/category'
type Props = {
  secondCategories: SecondCategoryType[]
  thirdCategories: ThirdCategoryType[]
  params: {
    firstCategoryId: string
    secondCategoryId: string
    thirdCategoryId?: string | undefined
  }
  borderTop: boolean
}

export default function GenderSection({
  secondCategories,
  thirdCategories,
  params,
  borderTop,
}: Props) {
  const router = useRouter()

  const currentFirstCategory = params.firstCategoryId
  const currentSecondCategory = params.secondCategoryId
  const currentThirdCategory = params.thirdCategoryId
  const secondCategory = secondCategories.filter((category) => {
    return category.id === currentSecondCategory
  })

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
      <Heading as="h2" text="カテゴリー" />

      <ul>
        {secondCategory.map((category) => (
          <ListItem
            key={category.id}
            text={category.name}
            href={`/${currentFirstCategory}/${category.id}/`}
            selected={true}
            // closeHandler={() => {
            //   router.push(`/search/?gender=${currentFirstCategory}`)
            // }}
            closeHandler={() => {
              router.push(`/${currentFirstCategory}/`)
            }}
            isChild={false}
          >
            <ul
              className={css`
                margin-top: 0.1rem;
              `}
            >
              {thirdCategories.map((category) => (
                <ListItem
                  key={category.id}
                  text={category.name}
                  href={`/${currentFirstCategory}/${currentSecondCategory}/${category.id}/`}
                  selected={category.id === currentThirdCategory}
                  closeHandler={() => {
                    router.push(
                      `/${currentFirstCategory}/${currentSecondCategory}/`
                    )
                  }}
                  isChild={true}
                />
              ))}
            </ul>
          </ListItem>
        ))}
      </ul>
    </section>
  )
}
