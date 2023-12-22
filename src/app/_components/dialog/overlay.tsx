import { css } from '@kuma-ui/core'

type Props = {
  isOpen: boolean
  onClick: () => void
}

export default function Overlay({ isOpen, onClick }: Props) {
  return (
    isOpen && (
      <div
        onClick={onClick}
        className={css`
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: 800;
          display: block;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 50%);
          transition: all 0.15s linear;
          opacity: 0.8;
        `}
      ></div>
    )
  )
}
