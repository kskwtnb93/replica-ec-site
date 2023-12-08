'use client'

import { css } from '@kuma-ui/core'
import Countup from 'react-countup'

type Props = {
  productCount: number
}

export default function GenderSection({ productCount }: Props) {
  return (
    <section
      className={css`
        position: relative;
        padding: 1.5rem 1.5rem 1rem;
        background-color: #c1c1c1;
        color: #fff;
        border-radius: 0.4rem 0.4rem 0 0;

        &:before {
          content: '';
          display: block;
          position: absolute;
          top: 1.8rem;
          right: -1.1rem;
          border-top: 0.8rem solid transparent;
          border-bottom: 0.8rem solid transparent;
          border-left: 1.1rem solid #c1c1c1;
        }
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
          <Countup end={productCount} duration={3} />
          <noscript>
            <span>{productCount}</span>
          </noscript>
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
