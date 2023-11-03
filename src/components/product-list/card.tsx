import { css } from '@kuma-ui/core'
import Image from 'next/image'
import Link from 'next/link'

import { TAX_RATE } from '@/utils/constants'

import type { ProductContentsType } from '@/types/products'

type Props = {
  product: ProductContentsType
  imagePriority: boolean
}

export default function Card({ product, imagePriority }: Props) {
  const { id, main_image, description, brand_name, price } = product
  const imageWidth = 228 * 2
  // 画像幅を556pxにしたときのアスペクト比を維持した画像の高さを求める
  const imageHeight = (main_image.height / main_image.width) * imageWidth
  const taxIncludedPrice = price + price * TAX_RATE
  const formattedPrice = taxIncludedPrice.toLocaleString()

  return (
    <li
      className={css`
        overflow: hidden;
      `}
    >
      <p>
        <Link
          href={`/products/${id}`}
          className={css`
            display: block;
            height: 274px;
            transition: all ease-in 0.15s;

            &:hover {
              opacity: 0.8;
            }
          `}
        >
          <Image
            className={css`
              width: 100%;
              height: 100%;
              object-fit: cover;
            `}
            src={main_image.url}
            // width={main_image.width}
            // height={main_image.height}
            width={imageWidth}
            height={imageHeight}
            alt={description}
            priority={imagePriority}
          />
        </Link>
      </p>
      <p
        className={css`
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
          word-wrap: normal;
          white-space: nowrap;
          color: #2d2d2d;
          margin-top: 5px;
        `}
      >
        {brand_name}
      </p>
      <p
        className={css`
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          margin-top: 7px;
          color: #2d2d2d;
        `}
      >
        ¥{formattedPrice}
      </p>
    </li>
  )
}
