import { css } from '@kuma-ui/core'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css`
        max-width: 980px;
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