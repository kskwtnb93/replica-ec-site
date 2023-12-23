import { css } from '@kuma-ui/core'
import Link from 'next/link'

import Heading from '@/app/_components/heading'
import Container from '@/app/_components/layouts/container'
import CartMain from '@/app/cart/_components/cart-main'

export default function Page() {
  return (
    <article
      className={css`
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 3rem 0 8rem;

        @media (max-width: 768px) {
          padding: 3rem 0 0;
        }
      `}
    >
      <div
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;

          @media (max-width: 768px) {
            border-bottom: 0.1rem solid rgb(233, 233, 233);
          }
        `}
      >
        <Container>
          <section>
            <div
              className={css`
                width: 100%;
                margin-bottom: 3rem;

                @media (max-width: 768px) {
                  margin-bottom: 1.5rem;
                }
              `}
            >
              <Heading as="h1" text="ショッピングカート" />
            </div>

            <CartMain />
          </section>
        </Container>
      </div>

      <div
        className={css`
          @media (min-width: 769px) {
            display: none;
          }
        `}
      >
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
            <Link
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
            </Link>
          </div>
        </Container>
      </div>
    </article>
  )
}
