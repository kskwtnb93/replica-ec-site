import { notFound } from 'next/navigation'

import Container from '@/components/layouts/container'
import { fetchFirstCategories, getCategory } from '@/utils/category'

import type { FirstCategoryType } from '@/types/category'

type PageProps = {
  params: {
    firstCategoryId: string
  }
}

export default async function Page({ params }: PageProps) {
  const firstCategories: FirstCategoryType[] =
    await fetchFirstCategories('no-store')
  const firstCategory: FirstCategoryType | undefined = await getCategory(
    params.firstCategoryId,
    firstCategories
  )

  if (!firstCategory) return notFound()

  return (
    <Container>
      <p>{firstCategory.id}</p>
      <p>{firstCategory.en_name}</p>
      <p>{firstCategory.ja_name}</p>
    </Container>
  )
}
