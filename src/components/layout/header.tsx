import { css } from '@kuma-ui/core'

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
        <p
          className={css`
            order: 2;
            font-size: 2rem;
            font-weight: bold;

            @media (max-width: 980px) {
              font-size: 1.6rem;
            }
          `}
        >
          MOMOTOWN
        </p>
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
      <div
        className={css`
          padding: 0 2rem 1.5rem 2rem;
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
    </header>
  )
}
