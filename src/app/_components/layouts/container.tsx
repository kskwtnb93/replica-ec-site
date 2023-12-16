import { css } from '@kuma-ui/core'

type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div
      className={css`
        width: 100%;
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 2rem;

        @media (max-width: 1020px) {
          max-width: 100%;
          padding: 0 calc(20 / 1020 * 100vw);
        }

        @media (max-width: 576px) {
          max-width: 100%;
          padding: 0 2rem;
        }
      `}
    >
      {children}
    </div>
  )
}
