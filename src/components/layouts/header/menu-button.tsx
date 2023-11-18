import { MouseEvent } from 'react'

import { css } from '@kuma-ui/core'
import { IconMenu } from '@/components/icons'

type Props = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function CloseButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={css`
        cursor: pointer;
      `}
    >
      <IconMenu width="2.8rem" height="2.8rem" color="#2d2d2d" />
    </button>
  )
}
