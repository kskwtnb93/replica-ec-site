import { css } from '@kuma-ui/core'
import { notFound } from 'next/navigation'

import FirstCategoryListAccordion from '@/app/(category)/_components/first-category-list-accordion'
import FirstCategoryListItem from '@/app/(category)/_components/first-category-list-item'
import Heading from '@/app/(category)/_components/heading'
import GenderTabs from '@/app/_components/gender-tabs'
import { IconArrowDown } from '@/app/_components/icons/index.tsx'
import Container from '@/app/_components/layouts/container'
import HasBreadcrumbLayout from '@/app/_components/layouts/has-breadcrumb-layout'
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
              padding-bottom: 0;
            }
          `}
        >
          <div
            className={css`
              margin-bottom: 3rem;

              @media (max-width: 576px) {
                margin: 0;
                padding: 4rem 0 3.5rem;
              }
            `}
          >
            <Heading as="h1" text={headingText} />
          </div>

          <div
            className={css`
              margin-bottom: 3.3rem;

              @media (max-width: 576px) {
                padding: 0 0 1.5rem;
                margin-bottom: 0;
              }
            `}
          >
            <GenderTabs categories={firstCategories} isLink={true} />
          </div>

          <div
            className={css`
              @media (max-width: 576px) {
                margin: 0 -2rem;
                border-bottom: 0.1rem solid #ededed;
              }
            `}
          >
            {secondCategories.map((secondCategory) => (
              <section
                key={secondCategory.id}
                className={css`
                  & + section {
                    margin-top: 5.5rem;
                  }

                  @media (max-width: 576px) {
                    & + section {
                      margin-top: 0;
                    }
                  }
                `}
              >
                <FirstCategoryListAccordion
                  headAriaLabel={secondCategory.name}
                  headChild={
                    <div
                      className={css`
                        @media (max-width: 576px) {
                          display: flex;
                          align-items: center;
                          border-top: 0.1rem solid #ededed;
                          padding: 1rem 1.5rem;
                        }
                      `}
                    >
                      <div
                        className={css`
                          display: none;

                          @media (max-width: 576px) {
                            display: block;
                            width: 4rem;
                            height: 4rem;
                            aspect-ratio: 1 / 1;
                            border-radius: 50%;
                            margin-right: 1.5rem;
                            border: 0.1rem solid #ededed;
                            background-color: #f8f8f8;
                          }
                        `}
                      ></div>

                      <h2
                        className={css`
                          font-size: 2rem;
                          font-weight: 600;
                          line-height: 1.6;
                          margin-bottom: 3rem;

                          @media (max-width: 576px) {
                            flex: 1;
                            font-size: 1.2rem;
                            line-height: 1.46154;
                            margin: 0;
                          }
                        `}
                      >
                        {secondCategory.name}
                      </h2>

                      <div
                        className={css`
                          display: none;

                          @media (max-width: 576px) {
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            padding-left: 1.5rem;
                          }
                        `}
                      >
                        <div
                          className={
                            'accordion-icon ' +
                            css`
                              display: flex;
                              align-items: center;
                            `
                          }
                        >
                          <IconArrowDown
                            width="1.8rem"
                            height="1.8rem"
                            color="#a0a0a0"
                          />
                        </div>
                      </div>
                    </div>
                  }
                  bodyChild={
                    thirdCategories.filter(
                      (thirdCategory) =>
                        secondCategory.id === thirdCategory.parent_id
                    ).length && (
                      <ul
                        className={css`
                          display: grid;
                          grid-template-columns: repeat(5, 1fr);
                          gap: 3.5rem 5.8rem;

                          @media (max-width: 1020px) {
                            gap: calc(35 / 1020 * 100vw) calc(58 / 1020 * 100vw);
                          }

                          @media (max-width: 576px) {
                            grid-template-columns: repeat(2, 1fr);
                            gap: 0.1rem;
                            overflow: hidden;
                            background-color: #f8f8f8;
                            margin-bottom: -0.1rem;
                          }
                        `}
                      >
                        <FirstCategoryListItem
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
                            <FirstCategoryListItem
                              key={filteredThirdCategory.id}
                              href={`/${params.firstCategoryId}/${secondCategory.id}/${filteredThirdCategory.id}/`}
                              category={filteredThirdCategory}
                            />
                          ))}
                      </ul>
                    )
                  }
                />
              </section>
            ))}
          </div>
        </div>
      </Container>
    </HasBreadcrumbLayout>
  )
}
