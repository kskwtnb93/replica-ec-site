'use client'

import { css } from '@kuma-ui/core'
import Image from 'next/image'

import DeleteButton from '@/app/cart/_components/cart-details/delete-button'
import QuantityIncrementDecrementButton from '@/app/cart/_components/cart-details/quantity-increment-decrement-button'
import { TAX_RATE } from '@/utils/constants'

import type {
  ProductContentsWithQuantityType,
  ImageType,
} from '@/types/product'

export default function CartItem({
  id,
  brand_name,
  name,
  main_image,
  price,
  quantity,
}): ProductContentsWithQuantityType {
  const image: ImageType = main_image
  const imageWidth = 85 * 2

  const taxIncludedPrice = price + price * TAX_RATE
  const formattedPrice: string = (taxIncludedPrice as number).toLocaleString()

  // 画像幅を556pxにしたときのアスペクト比を維持した画像の高さを求める
  function calcImageHeight(
    orgImageHeight: number,
    orgImageWidth: number,
    imageWidth: number
  ): number {
    return (orgImageHeight / orgImageWidth) * imageWidth
  }

  return (
    <div
      className={css`
        display: flex;
        padding: 1.2rem 0;
        border-bottom: 0.1rem solid #f3f3f3;
      `}
    >
      <p
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 8.5rem;
          height: 10.2rem;
          background-color: #f3f3f3;
        `}
      >
        <Image
          className={css`
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
          src={image.url}
          width={imageWidth}
          height={calcImageHeight(image.height, image.width, imageWidth)}
          alt={''}
          priority={true}
        />
      </p>

      <div
        className={css`
          flex: 1;
          padding: 0 0.5rem 0 1rem;
        `}
      >
        <p
          className={css`
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: normal;
            white-space: nowrap;
            font-size: 1rem;
            line-height: 1.5;
          `}
        >
          {brand_name}
        </p>

        <p
          className={css`
            overflow: hidden;
            text-overflow: ellipsis;
            word-wrap: normal;
            white-space: nowrap;
            font-size: 1rem;
            line-height: 1.5;
            margin-top: 0.2rem;
          `}
        >
          {name}
        </p>

        <p
          className={css`
            font-size: 1.4rem;
            line-height: 1.357142857142857;
            margin-top: 0.2rem;
          `}
        >
          ¥{formattedPrice}
        </p>
      </div>

      <div
        className={css`
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
          width: 9.5rem;
          height: 10.2rem;
          padding-left: 0.5rem;
        `}
      >
        <QuantityIncrementDecrementButton id={id} quantity={quantity} />

        <div
          className={css`
            position: absolute;
            right: 0;
            bottom: 0;
          `}
        >
          <DeleteButton id={id} />
        </div>
      </div>
    </div>
  )
}
