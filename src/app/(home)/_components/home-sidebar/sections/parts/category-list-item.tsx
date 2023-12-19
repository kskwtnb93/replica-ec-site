import { css } from '@kuma-ui/core'
import Link from 'next/link'

import { IconArrowRight } from '@/app/_components/icons/index'

import type { SecondCategoryType, ThirdCategoryType } from '@/types/category'

type Props = {
  href: string
  category: SecondCategoryType | ThirdCategoryType
  isFirst?: boolean
}

export default function FirstCategoryListItem({
  href,
  category,
  isFirst,
}: Props) {
  return (
    <li
      key={category.id}
      className={
        isFirst
          ? css`
              display: none;

              @media (max-width: 576px) {
                position: relative;
                display: flex;
                align-items: center;
                border-right: 0.1rem solid #ededed;
                border-bottom: 0.1rem solid #ededed;

                &:nth-child(2n) {
                  border-right: none;
                }
              }
            `
          : css`
              @media (max-width: 576px) {
                position: relative;
                display: flex;
                align-items: center;
                border-right: 0.1rem solid #ededed;
                border-bottom: 0.1rem solid #ededed;

                &:nth-child(2n) {
                  border-right: none;
                }
              }
            `
      }
    >
      <Link
        href={href}
        className={css`
          @media (min-width: 577px) {
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
          }

          @media (max-width: 576px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem;
            width: 100%;

            &:after {
              content: '';
              display: block;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: 1;
            }
          }
        `}
      >
        <span
          className={css`
            @media (max-width: 576px) {
              color: #2d2d2d;
              font-size: 1.2rem;
              font-weight: bold;
              line-height: 1.46154;
            }
          `}
        >
          {isFirst ? `すべての${category.name}` : category.name}
        </span>

        <span
          className={css`
            display: none;

            @media (max-width: 576px) {
              display: flex;
              align-items: center;
              padding-left: 1.5rem;
            }
          `}
        >
          <IconArrowRight width="1.8rem" height="1.8rem" color="#23abdd" />
        </span>
      </Link>
    </li>
  )
}
