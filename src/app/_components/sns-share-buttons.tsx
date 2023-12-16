'use client'

import { css } from '@kuma-ui/core'
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterShareButton,
  XIcon,
} from 'react-share'

export default function SnsShareModal() {
  const shareTitle = document.title
  const shareUrl = window.location.href

  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        gap: 2rem;
      `}
    >
      <TwitterShareButton url={shareUrl} title={shareTitle}>
        <XIcon size={40} round />
      </TwitterShareButton>

      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <LineShareButton url={shareUrl} title={shareTitle}>
        <LineIcon size={40} round />
      </LineShareButton>
    </div>
  )
}
