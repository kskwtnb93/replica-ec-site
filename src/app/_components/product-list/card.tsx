import { css } from '@kuma-ui/core'
import Image from 'next/image'
import Link from 'next/link'

import { TAX_RATE } from '@/utils/constants'
import { calcImageHeight, imagePlaceholder } from '@/utils/image'

import type { ProductContentsType } from '@/types/product'

type Props = {
  product: ProductContentsType
  imagePriority: boolean
}

export default function Card({ product, imagePriority }: Props) {
  const { id, main_image, description, brand_name, price } = product
  const imageWidth = 228 * 2
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
            position: relative;
            display: block;
            width: 100%;
            aspect-ratio: 228 / 274;
            transition: all ease-in 0.15s;
            overflow: hidden;

            &:hover {
              opacity: 0.8;
            }
          `}
        >
          <Image
            className={css`
              position: relative;
              width: 100%;
              height: 100%;
              object-fit: cover;
              z-index: 1;
            `}
            src={main_image.url}
            width={imageWidth}
            height={calcImageHeight(
              main_image.height,
              main_image.width,
              imageWidth
            )}
            alt={description}
            priority={imagePriority}
            placeholder={imagePlaceholder(
              imageWidth,
              calcImageHeight(main_image.height, main_image.width, imageWidth)
            )}
          />
        </Link>
      </p>

      <div
        className={css`
          @media (max-width: 576px) {
            padding: 0 1rem 2rem;
          }
        `}
      >
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
            margin-top: 0.5rem;

            @media (max-width: 576px) {
              font-size: 1rem;
              margin-top: 1rem;
            }
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

            @media (max-width: 576px) {
              font-size: 1.4rem;
              margin-top: 0.7rem;
            }
          `}
        >
          ¥{formattedPrice}
        </p>
      </div>
    </li>
  )
}
