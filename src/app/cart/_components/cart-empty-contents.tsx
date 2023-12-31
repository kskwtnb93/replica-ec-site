import { css } from '@kuma-ui/core'
import Button from '@/app/_components/buttons/button'

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
        `}
      >
        <Button asButton={false} text="ショッピングを続ける" href={'/'} />
      </p>
    </div>
  )
}
