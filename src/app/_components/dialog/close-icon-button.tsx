'use client'

import { css } from '@kuma-ui/core'
import { IconClose } from '@/app/_components/icons'

type Props = {
  onClick: () => void
}

export default function CloseIconButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        cursor: pointer;
        background: #f3f3f3;
      `}
    >
      <IconClose width="1.6rem" height="1.6rem" color="#2d2d2d" />
    </button>
  )
}
