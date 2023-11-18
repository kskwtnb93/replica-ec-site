import { MouseEvent } from 'react'

import { css } from '@kuma-ui/core'
import { IconClose } from '@/components/icons'

type Props = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function CloseButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={css`
        cursor: pointer;
        padding: 0.5rem;
      `}
    >
      <IconClose width="3rem" height="3rem" color="#ffffff" />
    </button>
  )
}
