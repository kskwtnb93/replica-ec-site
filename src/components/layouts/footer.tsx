import { css } from '@kuma-ui/core'
import Container from '@/components/layouts/container'

export default function Footer() {
  return (
    <footer
      className={css`
        background-color: #efefef;
        padding: 1.2rem 0;
      `}
    >
      <Container>
        <div
          className={css`
            display: flex;
            justify-content: center;
          `}
        >
          <p
            className={css`
              font-size: 1.2rem;
              line-height: 1.416666667;
              color: #a0a0a0;
            `}
          >
            Copyright
          </p>
        </div>
      </Container>
    </footer>
  )
}
