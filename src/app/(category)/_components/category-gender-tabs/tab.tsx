import { css } from '@kuma-ui/core'
import Link from 'next/link'

import type { FirstCategoryType } from '@/types/category'

export default function GenderTab({ id, ja_name, active }: FirstCategoryType) {
  return (
    <li
      className={css`
        text-align: center;
      `}
    >
      {id === active ? (
        <Link
          href={`/${id}/`}
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 15rem;
            height: 5.1rem;
            margin-bottom: -0.1rem;
            border-radius: 0.4rem 0.4rem 0 0;
            font-size: 1.5rem;
            font-weight: bold;
            color: #2d2d2d;
            border: 0.1rem solid rgba(45, 45, 45, 0.07);
            border-bottom: none;
            background-color: #fff;
            opacity: 1;
          `}
        >
          {ja_name}
        </Link>
      ) : (
        <Link
          href={`/${id}/`}
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 15rem;
            height: 4.5rem;
            border-radius: 0.4rem 0.4rem 0 0;
            font-size: 1.5rem;
            font-weight: bold;
            color: #a0a0a0;
            background-color: #f8f8f8;
            opacity: 1;
          `}
        >
          {ja_name}
        </Link>
      )}
    </li>
  )
}
