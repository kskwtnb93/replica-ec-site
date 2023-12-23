'use client'

import { css } from '@kuma-ui/core'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { IconCart } from '@/app/_components/icons'
import { selectCartTotalQuantity } from '@/redux/slices/cart'

export default function CartLinkBody() {
  const { cartTotalQuantity } = useSelector(selectCartTotalQuantity)

  return (
    <Link
      href="/cart/"
      className={css`
        display: block;
        position: relative;
      `}
    >
      {cartTotalQuantity > 0 && (
        <span
          className={css`
            position: absolute;
            top: calc(-2rem * 0.8 / 2);
            right: calc(-2rem * 0.8 / 2);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: red;
            border: none;
            color: #fff;
            font-family:
              Hiragino Kaku Gothic ProN,
              Hiragino Sans,
              Helvetica Neue,
              Helvetica,
              Arial,
              sans-serif;
            font-size: 1rem;
            font-weight: 600;
            height: 2rem;
            width: 2rem;
            white-space: nowrap;
            transform: scale(0.8);
            transform-origin: 50% 50%;
          `}
        >
          {String(cartTotalQuantity)}
        </span>
      )}
      <IconCart width="2.8rem" height="2.8rem" color="#2d2d2d" />
    </Link>
  )
}
