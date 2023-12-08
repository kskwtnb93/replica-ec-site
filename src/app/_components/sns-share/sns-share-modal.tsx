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

import Overlay from '@/app/_components/overlay.tsx'
import CloseIconButton from '@/app/_components/sns-share/close-icon-button'
import CloseTextButton from '@/app/_components/sns-share/close-text-button'

type Props = {
  shareUrl: string
  shareTitle: string
  // handleModalOpen: () => void
  handleModalClose: () => void
  isOpen: boolean
}

export default function SnsShareModal({
  shareUrl,
  shareTitle,
  // handleModalOpen,
  handleModalClose,
  isOpen,
}: Props) {
  return (
    <>
      <div
        className={
          isOpen
            ? css`
                pointer-events: none;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 1.5rem;
                z-index: 900;
                transition: all 0.2s ease-in-out;
                opacity: 1;
                margin-bottom: 0;
              `
            : css`
                pointer-events: none;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 1.5rem;
                z-index: 900;
                transition: all 0.2s ease-in-out;
                pointer-events: none;
                opacity: 0;
                margin-bottom: -20rem;
              `
        }
      >
        <div
          className={
            isOpen
              ? css`
                  pointer-events: auto;
                  width: 100%;
                `
              : css`
                  width: 100%;
                `
          }
        >
          <div
            className={css`
              position: relative;
              width: 100%;
              padding: 2rem 1.5rem 1.6rem;
              background: #ffffff;
              border-radius: 1rem;
            `}
          >
            <p
              className={css`
                font-size: 1.9rem;
                text-align: center;
                margin-bottom: 1.8rem;
              `}
            >
              シェアする
            </p>

            <div
              className={css`
                display: flex;
                justify-content: space-between;
                margin: 0 auto 2rem;
                width: 18.2rem;
              `}
            >
              <TwitterShareButton url={shareUrl} title={shareTitle}>
                <XIcon size={45} round />
              </TwitterShareButton>

              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={45} round />
              </FacebookShareButton>

              <LineShareButton url={shareUrl} title={shareTitle}>
                <LineIcon size={45} round />
              </LineShareButton>
            </div>

            <div
              className={css`
                display: flex;
                justify-content: center;
              `}
            >
              <CloseTextButton onClick={handleModalClose} />
            </div>

            <CloseIconButton onClick={handleModalClose} />
          </div>
        </div>
      </div>

      <Overlay isOpen={isOpen} onClick={handleModalClose} />
    </>
  )
}
