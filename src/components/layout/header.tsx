import { css } from '@kuma-ui/core'

export default function Header() {
  return (
    <header
      className={css`
        display: flex;
        justify-content: center;
        background-color: #efefef;
        padding: 1rem;
      `}
    >
      <p
        className={css`
          font-size: 2rem;
          font-weight: bold;
        `}
      >
        MOMOTOWN
      </p>
    </header>
  )
}
