import { css } from '@kuma-ui/core'
import Link from 'next/link'

export default function CartEmptyContents() {
  return (
    <div>
      <p
        className={css`
          padding: 5rem 0 8rem;
          font-size: 1.5rem;
          color: #808080;
          text-align: center;
        `}
      >
        現在カートに商品はありません。
      </p>

      <p
        className={css`
          width: 26rem;
          margin: 0 auto;

          @media (max-width: 768px) {
            display: none;
          }

          // @media (max-width: 576px) {
          //   width: 100%;
          // }
        `}
      >
        <Link
          href={'/'}
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
          ショッピングを続ける
        </Link>
      </p>
    </div>
  )
}
