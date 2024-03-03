import React, { Suspense } from 'react'
import { css } from '@kuma-ui/core'
import { notFound } from 'next/navigation'

import CategoryContents from '@/app/(category)/_components/category-contents'
import Container from '@/app/_components/layouts/container'
import HasBreadcrumbLayout from '@/app/_components/layouts/has-breadcrumb-layout'
import {
  fetchFirstCategories,
  fetchSecondCategories,
  fetchThirdCategories,
  getCategory,
} from '@/utils/category'

import type { BreadcrumbType } from '@/types'
import type {
  FirstCategoryType,
  SecondCategoryType,
  ThirdCategoryType,
} from '@/types/category'

type PageProps = {
  params: {
    firstCategoryId: string
    secondCategoryId: string
    thirdCategoryId: string
  }
}

export default async function Page({ params }: PageProps) {
  const firstCategories: FirstCategoryType[] =
    await fetchFirstCategories('force-cache')
  const firstCategory: FirstCategoryType | undefined = await getCategory(
    params.firstCategoryId,
    firstCategories
  )
  const secondCategories: SecondCategoryType[] =
    await fetchSecondCategories('force-cache')
  const secondCategory: SecondCategoryType | undefined = await getCategory(
    params.secondCategoryId,
    secondCategories
  )

  if (!firstCategory || !secondCategory) return notFound()

  const thirdCategories: ThirdCategoryType[] = await fetchThirdCategories(
    params.secondCategoryId,
    'force-cache'
  )
  const thirdCategory: ThirdCategoryType | undefined = await getCategory(
    params.thirdCategoryId,
    thirdCategories
  )

  if (!thirdCategory) return notFound()

  const headingText =
    firstCategory.id !== 'all'
      ? `${thirdCategory.name}（${firstCategory.ja_name}）`
      : `${thirdCategory.name}`

  // パンくずコンポーネント用Propsを作成
  const lastBreadcrumbText =
    params.firstCategoryId === 'all'
      ? '対象商品'
      : `対象商品（性別：${firstCategory.ja_name}）`
  const breadcrumbData: BreadcrumbType[] = [
    {
      href: '/',
      text: 'MOMOTOWN',
    },
    {
      href: `/${firstCategory.id}/${secondCategory.id}/`,
      text: `${secondCategory.name}`,
    },
    {
      href: `/${firstCategory.id}/${secondCategory.id}/${thirdCategory.id}`,
      text: `${thirdCategory.name}`,
    },
    {
      href: '',
      text: lastBreadcrumbText,
    },
  ]

  return (
    <HasBreadcrumbLayout
      breadcrumbData={breadcrumbData}
      parentTag="article"
      bgColor="#f8f8f8"
    >
      <Container>
        <div
          className={css`
            padding-bottom: 8rem;

            @media (max-width: 576px) {
              padding-top: 3rem;
              padding-bottom: 0;
            }
          `}
        >
          <Suspense>
            <CategoryContents
              HeadingText={headingText}
              filterCategoryHierarchy="thirdCategory"
              filterCategoryId={params.thirdCategoryId}
              params={params}
              firstCategories={firstCategories}
              secondCategories={secondCategories}
              thirdCategories={thirdCategories}
            />
          </Suspense>
        </div>
      </Container>
    </HasBreadcrumbLayout>
  )
}
