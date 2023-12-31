'use client'

import { css } from '@kuma-ui/core'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

import Heading from '@/app/_components/category-sidebar/sections/parts/heading'
import ListItem from '@/app/_components/category-sidebar/sections/parts/list-item'
import { switchGender } from '@/redux/slices/gender'

import type { FirstCategoryType } from '@/types/category'
type Props = {
  firstCategories: FirstCategoryType[]
  params: {
    firstCategoryId: string
    secondCategoryId: string
    thirdCategoryId?: string | undefined
  }
  borderTop: boolean
}

export default function GenderSection({
  firstCategories,
  params,
  borderTop,
}: Props) {
  const router = useRouter()
  const dispatch = useDispatch()

  const filteredFirstCategories = firstCategories.filter(
    (category) => category.id !== 'all'
  )

  const currentFirstCategory = params.firstCategoryId
  const currentSecondCategory = params.secondCategoryId
  const currentThirdCategory = params.thirdCategoryId
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
            onClick={() => {
              dispatch(switchGender(category.id))
            }}
            text={category.ja_name}
            href={`/${category.id}/${lastPath}`}
            selected={category.id === currentFirstCategory}
            closeHandler={() => {
              dispatch(switchGender('all'))
              router.push(`/all/${lastPath}`)
            }}
          />
        ))}
      </ul>
    </section>
  )
}
