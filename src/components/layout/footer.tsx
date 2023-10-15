import { css } from '@kuma-ui/core'

export default function Footer() {
  return (
    <footer
      className={css`
        display: flex;
        justify-content: center;
        background-color: #efefef;
        padding: 1rem;
      `}
    >
      <p
        className={css`
          font-size: 1rem;
          color: #a0a0a0;
        `}
      >
        Copyright text
      </p>
    </footer>
  )
}
