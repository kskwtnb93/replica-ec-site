import { css } from '@kuma-ui/core'

type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div
      className={css`
        width: 1020px;
        margin: 0 auto;
        padding: 0 2rem;

        @media (max-width: 980px) {
          max-width: 100%;
        }
      `}
    >
      {children}
    </div>
  )
}
