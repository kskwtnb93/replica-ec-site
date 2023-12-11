import { css } from '@kuma-ui/core'

export default function ScrollXContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className={css`
        width: 1020px;
        margin: 0 auto;
        padding: 0 2rem;

        @media (max-width: 576px) {
          width: 100%;
          padding: 0;
          overflow-x: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      `}
    >
      <div
        className={css`
          @media (max-width: 576px) {
            display: inline-block;
            min-width: 100%;
          }
        `}
      >
        {children}
      </div>
    </div>
  )
}
