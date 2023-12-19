import { css } from '@kuma-ui/core'
import { IconMenu } from '@/app/_components/icons'

type Props = {
  onClick: () => void
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
