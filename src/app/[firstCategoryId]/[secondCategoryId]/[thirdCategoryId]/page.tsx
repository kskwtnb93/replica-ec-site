import { notFound } from 'next/navigation'

import Container from '@/components/layout/container'
import {
  getCategory,
  getFirstCategories,
  getSecondCategories,
} from '@/utils/categories'

import type { FirstCategory, SecondCategory } from '@/types/categories'

type PageProps = {
  params: {
    firstCategoryId: string
    secondCategoryId: string
  }
}

export default async function Page({ params }: PageProps) {
  const firstCategories: FirstCategory[] = await getFirstCategories('no-store')
  const secondCategories: SecondCategory[] =
    await getSecondCategories('no-store')
  const firstCategory: FirstCategory | undefined = await getCategory(
    params.firstCategoryId,
    firstCategories
  )
  const secondCategory: SecondCategory | undefined = await getCategory(
    params.secondCategoryId,
    secondCategories
  )

  if (!firstCategory || !secondCategory) return notFound()

  return (
    <Container>
      <p>
        {firstCategory.id} ＞ {secondCategory.id}
      </p>
    </Container>
  )
}
