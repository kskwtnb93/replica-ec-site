import { css } from '@kuma-ui/core'
import CartDetails from '@/components/cart/cart-details'
import Container from '@/components/layouts/container'

export default function Page() {
  return (
    <article
      className={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1.5rem 0 0;
      `}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          border-bottom: 0.1rem solid rgb(233, 233, 233);
        `}
      >
        <Container>
          <section>
            <h1
              className={css`
                font-size: 1.8rem;
                font-weight: 600;
                line-height: 1.6875;
                margin-bottom: 1.5rem;
              `}
            >
              ショッピングカート
            </h1>

            <CartDetails />

            <div
              className={css`
                margin: 1.5rem 0;
              `}
            >
              <button
                className={css`
                  width: 100%;
                  align-items: center;
                  appearance: none;
                  cursor: pointer;
                  display: inline-flex;
                  font-size: 1.5rem;
                  font-weight: bold;
                  justify-content: center;
                  line-height: 1;
                  margin: 0;
                  outline: 0;
                  padding: 0.5rem;
                  border-radius: 0.8rem;
                  min-height: 5rem;
                  background-color: #23abdd;
                  color: #fff;
                `}
              >
                レジへ進む
              </button>
            </div>
          </section>
        </Container>
      </div>

      <div
        className={css`
          padding: 1rem 0;
          background-color: #f3f3f3;
        `}
      ></div>

      <Container>
        <div
          className={css`
            padding: 2.5rem 0;
          `}
        >
          <a
            href="/"
            className={css`
              width: 100%;
              align-items: center;
              appearance: none;
              cursor: pointer;
              display: inline-flex;
              font-size: 1.5rem;
              font-weight: bold;
              justify-content: center;
              line-height: 1;
              margin: 0;
              outline: 0;
              padding: 0.5rem;
              border-radius: 0.8rem;
              min-height: 5rem;
              // background-color: #23abdd;
              color: #23abdd;
              border: 0.1rem solid #23abdd;
            `}
          >
            ショッピングを続ける
          </a>
        </div>
      </Container>
    </article>
  )
}
