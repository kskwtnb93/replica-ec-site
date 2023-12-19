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
      className={css`
        position: relative;

        @media (max-width: 576px) {
          display: flex;
          align-items: center;
          border-right: 0.1rem solid #ededed;
          border-bottom: 0.1rem solid #ededed;

          &:nth-child(2n) {
            border-right: none;
          }
        }
      `}
    >
      <Link
        href={href}
        className={css`
          display: block;

          &:hover {
            p:nth-of-type(1) {
              opacity: 0.8;
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
        <div
          className={css`
            display: block;
            width: 100%;
            border-radius: 1rem;
            margin-bottom: 1rem;
            overflow: hidden;

            @media (max-width: 576px) {
              display: none;
            }
          `}
        >
          <div
            className={css`
              position: relative;
              width: 100%;
              aspect-ratio: 1 / 1;
              padding-bottom: 100%;
            `}
          >
            <p
              className={css`
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: #f8f8f8;
              `}
            >
              <span>Img</span>
            </p>
          </div>
        </div>

        <p
          className={css`
            font-size: 1.3rem;
            line-height: 1.6;
            color: #a0a0a0;

            @media (max-width: 576px) {
              color: #2d2d2d;
              font-size: 1.2rem;
              font-weight: bold;
              line-height: 1.46154;
            }
          `}
        >
          {isFirst ? `すべての${category.name}` : category.name}
        </p>

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
