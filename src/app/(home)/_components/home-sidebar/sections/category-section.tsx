'use client'

import { css } from '@kuma-ui/core'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import Heading from '@/app/(home)/_components/home-sidebar/sections/parts/heading'
import { IconArrowRight } from '@/components/icons'
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
    <section
      className={css`
        // border-top: 0.1rem solid rgba(45, 45, 45, 5%);
        // padding-top: 2rem;
        // margin-top: 2rem;
      `}
    >
      <Heading as="h3" text="カテゴリーから探す" />

      <ul>
        {secondCategories.map((secondCategory) => (
          <li
            key={secondCategory.id}
            aria-describedby={`${secondCategory.id}-child-categories`}
            className={css`
              position: relative;
              transition: all 0.3s;

              > ul {
                pointer-events: none;
                opacity: 0;
              }

              &:hover {
                background-color: rgba(45, 45, 45, 0.1);

                > ul {
                  pointer-events: auto;
                  opacity: 1;
                }
              }
            `}
          >
            <span
              className={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.7rem 1rem;
                font-size: 1.3rem;
                line-height: 1.6;
                color: #2d2d2d;
                transition: all 0.3s;
              `}
            >
              {secondCategory.name}
              <span
                className={css`
                  display: flex;
                  align-items: center;
                  margin-right: -0.4rem;
                  padding-left: 0.4rem;
                `}
              >
                <IconArrowRight
                  width="1.6rem"
                  height="1.6rem"
                  color="#a0a0a0"
                />
              </span>
            </span>

            {thirdCategories.filter(
              (thirdCategory) => secondCategory.id === thirdCategory.parent_id
            ).length && (
              <ul
                role="tooltip"
                id={`${secondCategory.id}-child-categories`}
                className={css`
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
                        href={`/${gender}/${secondCategory.id}/${filteredThirdCategory.id}/`}
                        className={css`
                          display: flex;
                          align-items: center;
                          justify-content: space-between;
                          padding: 0.7rem 1.7rem;
                          font-size: 1.3rem;
                          line-height: 1.6;
                          color: #2d2d2d;

                          &:hover {
                            background-color: rgba(45, 45, 45, 0.05);
                          }
                        `}
                      >
                        {filteredThirdCategory.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
