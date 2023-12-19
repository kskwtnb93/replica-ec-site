import { css } from '@kuma-ui/core'
import { IconArrowRight } from '@/app/_components/icons'

type Props = {
  kind: 'prev' | 'next'
  onClick: () => void
}

export default function NavigationButton({ kind, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        appearance: none;
        cursor: pointer;
        outline: 0;
        width: 4rem;
        height: 4rem;
        background-color: rgba(0, 0, 0, 20%);
        border: 0.1rem solid rgba(255, 255, 255, 70%);
        border-radius: 100%;
      `}
    >
      <span
        className={
          kind === 'prev'
            ? css`
                display: flex;
                align-items: center;
                justify-content: center;
                margin-left: -0.2rem;
                transform: rotate(180deg);
              `
            : css`
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: -0.2rem;
              `
        }
      >
        <IconArrowRight width="1.8rem" height="1.8rem" color="#ffffff" />
      </span>
    </button>
  )
}
