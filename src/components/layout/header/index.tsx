import { css } from '@kuma-ui/core'
import Container from '@/components/layout/container'
import Logo from '@/components/layout/header/logo'

export default function Header() {
  return (
    <header
      className={css`
        background-color: #efefef;
      `}
    >
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
        `}
      >
        <Logo />
        <nav
          className={css`
            order: 1;
            font-weight: bold;
          `}
        >
          Menu
        </nav>
        <p
          className={css`
            order: 3;
            font-weight: bold;
          `}
        >
          Cart
        </p>
      </div>
      <Container>
        <div
          className={css`
            padding: 0 0 2rem;
          `}
        >
          <p
            className={css`
              background-color: #fff;
              padding: 1rem;
              border-radius: 0.4rem;
              color: rgb(200, 200, 200);
              font-weight: bold;
              font-size: 1.2rem;
            `}
          >
            Search Area
          </p>
        </div>
      </Container>
    </header>
  )
}
