import { css } from '@kuma-ui/core'

type Props = {
  productCount: number
}

export default function GenderSection({ productCount }: Props) {
  return (
    <section
      className={css`
        padding: 1.5rem 1.5rem 1rem;
        background-color: #c1c1c1;
        color: #fff;
        border-radius: 0.4rem 0.4rem 0 0;
      `}
    >
      <h2
        className={css`
          font-size: 1.3rem;
        `}
      >
        <span
          className={css`
            display: block;
            margin-bottom: 0.5rem;
            font-weight: normal;
          `}
        >
          対象商品
        </span>

        <span
          className={css`
            display: inline-block;
            font-size: 2.9rem;
            font-weight: bold;
            line-height: 1.1;
            margin-bottom: 0.5rem;
          `}
        >
          {productCount}
        </span>
        <span
          className={css`
            display: inline-block;
            margin-left: 0.5em;
          `}
        >
          件
        </span>
      </h2>
    </section>
  )
}
