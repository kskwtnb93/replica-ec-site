import { notFound } from 'next/navigation'

import Container from '@/components/layout/container'
import { getCategories1 } from '@/utils'

import type { Categories1 } from '@/types/categories'

type PageProps = {
  params: {
    category1Id: string
  }
}

async function getCategory(id: string) {
  const categories: Categories1[] = await getCategories1('no-store')
  const category = categories.find((category) => category.id === id)
  return category
}

export default async function Page({ params }: PageProps) {
  const category = await getCategory(params.category1Id)
  console.log(params)

  if (!category) return notFound()

  return (
    <Container>
      <p>{category.id}</p>
      <p>{category.en_name}</p>
      <p>{category.ja_name}</p>
    </Container>
  )
}
