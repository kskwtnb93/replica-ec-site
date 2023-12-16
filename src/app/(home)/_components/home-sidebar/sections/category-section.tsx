'use client'

import { css } from '@kuma-ui/core'
import { useSelector } from 'react-redux'

import CategoryListItem from '@/app/(home)/_components/home-sidebar/sections/parts/category-list-item'
import Heading from '@/app/(home)/_components/home-sidebar/sections/parts/heading'
import { IconArrowDown, IconArrowRight } from '@/app/_components/icons'
import SpOnlyAccordion from '@/app/_components/sp-only-accordion.tsx'
import { selectGender } from '@/redux/slices/gender'

import type { SecondCategoryType, ThirdCategoryType } from '@/types/category'

type Props = {
  secondCategories: SecondCategoryType[]
  thirdCategories: ThirdCategoryType[]
}

export default function GenderSection({
  secondCategories,
  thirdCategories,
}: Props) {
  const { gender } = useSelector(selectGender)

  return (
    <>
      <Heading as="h2" text="カテゴリーから探す" />

      <ul
        className={css`
          @media (max-width: 576px) {
            margin: 0 -2rem;
            border-bottom: 0.1rem solid #ededed;
            background-color: #fff;
          }
        `}
      >
        {secondCategories.map((secondCategory) => (
          <li
            key={secondCategory.id}
            aria-describedby={`${secondCategory.id}-child-categories`}
            className={css`
              @media (min-width: 576px) {
                position: relative;
                transition:
                  opacity 0.3s,
                  background-color 0.3s;

                ul {
                  pointer-events: none;
                  opacity: 0;
                }

                &:hover {
                  background-color: rgba(45, 45, 45, 0.1);

                  ul {
                    pointer-events: auto;
                    opacity: 1;
                  }
                }
              }
            `}
          >
            <SpOnlyAccordion
              headAriaLabel={secondCategory.name}
              headChild={
                <div
                  className={css`
                    @media (min-width: 577px) {
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      padding: 0.7rem 1rem;
                      font-size: 1.3rem;
                      line-height: 1.6;
                      color: #2d2d2d;
                    }

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

                  <p
                    className={css`
                      @media (max-width: 576px) {
                        flex: 1;
                        font-size: 1.2rem;
                        font-weight: bold;
                        line-height: 1.46154;
                        margin: 0;
                      }
                    `}
                  >
                    {secondCategory.name}
                  </p>

                  <div
                    className={css`
                      display: flex;
                      align-items: center;
                      margin-right: -0.4rem;
                      padding-left: 0.4rem;

                      @media (max-width: 576px) {
                        display: none;
                      }
                    `}
                  >
                    <IconArrowRight
                      width="1.6rem"
                      height="1.6rem"
                      color="#a0a0a0"
                    />
                  </div>

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
                    role="tooltip"
                    id={`${secondCategory.id}-child-categories`}
                    className={css`
                      @media (min-width: 576px) {
                        width: 23rem;
                        position: absolute;
                        top: -1.2rem;
                        right: 2rem;
                        transform: translateX(100%);
                        background-color: #fff;
                        border-radius: 0.6rem;
                        padding: 1.2rem 0;
                        z-index: 1;
                        box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.05);
                      }

                      @media (max-width: 576px) {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 0.1rem;
                        overflow: hidden;
                        background-color: #f8f8f8;
                        margin-bottom: -0.1rem;
                      }
                    `}
                  >
                    <CategoryListItem
                      href={`/${gender}/${secondCategory.id}/`}
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
                          href={`/${gender}/${secondCategory.id}/${filteredThirdCategory.id}/`}
                          category={filteredThirdCategory}
                          isFirst={false}
                        />
                      ))}
                  </ul>
                )
              }
            />
          </li>
        ))}
      </ul>
    </>
  )
}
