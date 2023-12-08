import { Box, css } from '@kuma-ui/core'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import CategoryGenderTabs from '@/app/(category)/_components/category-gender-tabs'
import Heading from '@/app/(category)/_components/heading'
import Breadcrumb from '@/app/_components/breadcrumb'
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
          <CategoryGenderTabs
            categories={firstCategories}
            active={params.firstCategoryId}
          />
        </Box>

        <Box mb="5.5rem">
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
        </Box>

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
              <Link
                href={`/${params.firstCategoryId}/${secondCategory.id}/`}
                className={css`
                  color: #23abdd;

                  &:hover {
                    text-decoration: underline;
                  }
                `}
              >
                {secondCategory.name}
              </Link>
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
                {thirdCategories
                  .filter(
                    (thirdCategory) =>
                      secondCategory.id === thirdCategory.parent_id
                  )
                  .map((filteredThirdCategory) => (
                    <li key={filteredThirdCategory.id}>
                      <Link
                        href={`/${params.firstCategoryId}/${secondCategory.id}/`}
                        className={css`
                          &:hover {
                            p:nth-of-type(1) {
                              opacity: 0.8;
                            }
                          }
                        `}
                      >
                        <p
                          className={css`
                            display: block;
                            width: 100%;
                            height: 15rem;
                            background-color: #f8f8f8;
                            border-radius: 1rem;
                            margin-bottom: 1rem;
                          `}
                        ></p>
                        <p
                          className={css`
                            font-size: 1.3rem;
                            line-height: 1.6;
                            color: #a0a0a0;
                          `}
                        >
                          {filteredThirdCategory.name}
                        </p>
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </section>
        ))}
      </Box>
    </Container>
  )
}
