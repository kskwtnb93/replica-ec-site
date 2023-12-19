import { css } from '@kuma-ui/core'
import { IconClose } from '@/app/_components/icons'

type Props = {
  onClick: () => void
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
