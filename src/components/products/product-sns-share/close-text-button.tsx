'use client'

import { css } from '@kuma-ui/core'

type Props = {
  onClick: () => void
}

export default function CloseTextButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={css`
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 30rem;
        width: 100%;
        min-height: 5rem;
        border-radius: 10rem;
        flex-flow: column nowrap;
        font-size: 1.5rem;
        font-weight: bold;
        color: #23abdd;
        line-height: 1;
        margin: 0;
        outline: 0;
        padding: 0.5rem;
        border: 0.1rem solid #23abdd;
      `}
    >
      閉じる
    </button>
  )
}
