'use client'
import { css } from '@kuma-ui/core'
import { FacebookIcon, LineIcon, XIcon } from 'react-share'

type Props = {
  onClick: () => void
}

export default function SnsShareButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={css`
        border: 0;
        outline: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 5.6rem;
        padding: 0 2.8rem;
        border-radius: 2.8rem;
        background-color: #fff;
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 14%);
      `}
    >
      <span
        className={css`
          display: flex;
          gap: 0.7rem;
        `}
      >
        <span
          className={css`
            display: block;
          `}
        >
          <XIcon size={28} round />
        </span>
        <span
          className={css`
            display: block;
          `}
        >
          <FacebookIcon size={28} round />
        </span>
        <span
          className={css`
            display: block;
          `}
        >
          <LineIcon size={28} round />
        </span>
      </span>

      <span
        className={css`
          font-size: 1.6rem;
          font-weight: bold;
          padding-left: 1rem;
          color: #23abdd;
        `}
      >
        シェアする
      </span>
    </button>
  )
}
