import { css } from '@kuma-ui/core'
import Link from 'next/link'

import type { SecondCategoryType, ThirdCategoryType } from '@/types/category'

type Props = {
  href: string
  category: SecondCategoryType | ThirdCategoryType
  isFirst?: boolean
}

export default function CategoryListItem({ href, category, isFirst }: Props) {
  return (
    <li>
      <Link
        href={href}
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
          {isFirst ? `すべての${category.name}` : category.name}
        </p>
      </Link>
    </li>
  )
}
