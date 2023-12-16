import { css } from '@kuma-ui/core'
import Link from 'next/link'

import Container from '@/app/_components/layouts/container'
import CartDetails from '@/app/cart/_components/cart-details'

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
          <section
            className={css`
              @media (min-width: 769px) {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
              }
            `}
          >
            <h1
              className={css`
                font-size: 2.8rem;
                font-weight: 600;
                line-height: 1.6875;
                margin-bottom: 3rem;
                width: 100%;

                @media (max-width: 768px) {
                  font-size: 1.8rem;
                  margin-bottom: 1.5rem;
                }
              `}
            >
              ショッピングカート
            </h1>

            <div
              className={css`
                @media (min-width: 769px) {
                  flex: 1;
                }

                @media (max-width: 768px) {
                  width: inherit;
                }
              `}
            >
              <CartDetails />
            </div>

            <div
              className={css`
                @media (min-width: 769px) {
                  width: 35rem;
                  margin-left: 3rem;
                }

                @media (max-width: 1020px) {
                  width: calc(350 / 1020 * 100vw);
                  margin-left: calc(30 / 1020 * 100vw);
                }

                @media (max-width: 768px) {
                  width: inherit;
                  padding: 1.5rem 0 3rem;
                  margin-left: 0;
                }
              `}
            >
              <div
                className={css`
                  @media (min-width: 769px) {
                    padding: 2.5rem 3rem;
                    border-radius: 0.6rem;
                    box-shadow: 0.1rem 0 0.5rem 0.4rem rgba(69, 145, 175, 0.6);
                  }
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

                <Link
                  href="/"
                  className={css`
                    display: block;
                    margin-top: 3rem;
                    font-size: 1.3rem;
                    text-align: center;
                    line-height: 1.384615384615385;
                    color: #23abdd;

                    @media (max-width: 768px) {
                      display: none;
                    }
                  `}
                >
                  ショッピングを続ける
                </Link>
              </div>
            </div>
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
