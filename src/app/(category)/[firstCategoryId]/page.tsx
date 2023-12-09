import { Box, css } from '@kuma-ui/core'
import { notFound } from 'next/navigation'

import CategoryListItem from '@/app/(category)/_components/category-list-item'
import Heading from '@/app/(category)/_components/heading'
import Breadcrumb from '@/app/_components/breadcrumb'
import GenderTabs from '@/app/_components/gender-tabs'
import Container from '@/app/_components/layouts/container'
import {
  fetchFirstCategories,
  fetchSecondCategories,
  fetchThirdCategoriesAll,
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
  }
}

export default async function Page({ params }: PageProps) {
  const firstCategories: FirstCategoryType[] =
    await fetchFirstCategories('no-store')
  const firstCategory: FirstCategoryType | undefined = await getCategory(
    params.firstCategoryId,
    firstCategories
  )
  const secondCategories: SecondCategoryType[] =
    await fetchSecondCategories('no-store')

  if (!firstCategory) return notFound()

  const thirdCategories: ThirdCategoryType[] =
    await fetchThirdCategoriesAll('no-store')

  // パンくずコンポーネント用Propsを作成
  const headingText =
    params.firstCategoryId === 'all'
      ? 'カテゴリーから探す'
      : `カテゴリーから探す（${firstCategory.ja_name}）`
  const breadcrumbData: BreadcrumbType[] = [
    {
      href: '/',
      text: 'MOMOTOWN',
    },
    {
      href: '',
      text: headingText,
    },
  ]

  return (
    <Container>
      <Box m="2.5rem 0 4rem">
        <Breadcrumb data={breadcrumbData} />
      </Box>

      <Box pb="8rem">
        <Heading as="h1" text={headingText} />

        <Box mb="3.3rem">
          <GenderTabs categories={firstCategories} isLink={true} />
        </Box>

        {/* <Box mb="5.5rem">
          <ul
            className={css`
              display: grid;
              gap: 1.5rem;
              grid-template-columns: repeat(4, 1fr);
            `}
          >
            {secondCategories.map((secondCategory) => (
              <li key={secondCategory.id}>
                <Link
                  href={`/${params.firstCategoryId}/${secondCategory.id}/`}
                  className={css`
                    font-size: 1.3rem;
                    line-height: 1.6;
                    color: #23abdd;

                    &:hover {
                      text-decoration: underline;
                    }
                  `}
                >
                  {secondCategory.name}
                </Link>
              </li>
            ))}
          </ul>
        </Box> */}

        {secondCategories.map((secondCategory) => (
          <section
            key={secondCategory.id}
            className={css`
              & + section {
                margin-top: 5.5rem;
              }
            `}
          >
            <h2
              className={css`
                font-size: 2rem;
                font-weight: 600;
                line-height: 1.6;
                margin-bottom: 3rem;
              `}
            >
              {secondCategory.name}
            </h2>

            {thirdCategories.filter(
              (thirdCategory) => secondCategory.id === thirdCategory.parent_id
            ).length && (
              <ul
                className={css`
                  display: grid;
                  grid-template-columns: repeat(5, 1fr);
                  gap: 3.5rem 5.8rem;
                `}
              >
                <CategoryListItem
                  key={secondCategory.id}
                  href={`/${params.firstCategoryId}/${secondCategory.id}/`}
                  category={secondCategory}
                  isFirst={true}
                />
                {thirdCategories
                  .filter(
                    (thirdCategory) =>
                      secondCategory.id === thirdCategory.parent_id
                  )
                  .map((filteredThirdCategory) => (
                    <CategoryListItem
                      key={filteredThirdCategory.id}
                      href={`/${params.firstCategoryId}/${secondCategory.id}/${filteredThirdCategory.id}/`}
                      category={filteredThirdCategory}
                    />
                  ))}
              </ul>
            )}
          </section>
        ))}
      </Box>
    </Container>
  )
}
