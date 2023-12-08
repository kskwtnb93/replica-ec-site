'use client'

import { css } from '@kuma-ui/core'
import { IconCart } from '@/app/_components/icons'

type Props = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function AddCartButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={css`
        width: 100%;
        align-items: center;
        appearance: none;
        cursor: pointer;
        display: inline-flex;
        font-size: 1.5rem;
        font-weight: bold;
        justify-content: center;
        line-height: 1;
        margin: 0;
        outline: 0;
        padding: 0.5rem;
        border-radius: 0.8rem;
        min-height: 6rem;
        background-color: #23abdd;
        color: #fff;
      `}
    >
      <span
        className={css`
          margin-right: 0.5rem;
        `}
      >
        <IconCart width="2.2rem" height="2.2rem" color="#ffffff" />
      </span>
      カートに入れる
    </button>
  )
}
