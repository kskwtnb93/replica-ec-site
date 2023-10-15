import { notFound } from 'next/navigation'

import Container from '@/components/layout/container'
import { getCategories1, getCategories2 } from '@/utils'

import type { Categories1, Categories2 } from '@/types/categories'

type PageProps = {
  params: {
    category1Id: string
    category2Id: string
  }
}

async function getCategory1(id: string) {
  const categories: Categories1[] = await getCategories1('no-store')
  const category = categories.find((category) => category.id === id)
  return category
}

async function getCategory2(id: string) {
  const categories: Categories2[] = await getCategories2('no-store')
  const category = categories.find((category) => category.id === id)
  return category
}

export default async function Page({ params }: PageProps) {
  const category1 = await getCategory1(params.category1Id)
  const category2 = await getCategory2(params.category2Id)

  console.log(category1)
  console.log(category2)

  if (!category1 || !category2) return notFound()

  return (
    <Container>
      <p>
        {category1.id} ＞ {category2.id}
      </p>
    </Container>
  )
}
