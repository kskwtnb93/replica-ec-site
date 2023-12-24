import { css } from '@kuma-ui/core'

export default function HomeBanner() {
  return (
    <div
      className={css`
        border-radius: 0.6rem;
        background-color: #f26868;
        padding: 1.4rem 2rem;
      `}
    >
      <p
        className={css`
          font-size: 1.2rem;
          line-height: 1.6;
          color: #fff;
          text-align: center;
          word-break: auto-phrase;
        `}
      >
        ※当サイトはデモンストレーションのため、実際の商品の購入や決済は行われません。
      </p>
    </div>
  )
}
