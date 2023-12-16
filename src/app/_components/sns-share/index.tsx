'use client'

import { useState } from 'react'

import { css } from '@kuma-ui/core'
import SnsShareButton from '@/app/_components/sns-share/sns-share-button'
import SnsShareModal from '@/app/_components/sns-share/sns-share-modal'

type Props = {
  shareTitle: string
  shareUrl: string
}

export default function ProductSnsShareSp({ shareUrl, shareTitle }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleModalOpen() {
    setIsOpen(!isOpen)
  }

  function handleModalClose() {
    setIsOpen(false)
  }

  return (
    <>
      <div
        className={css`
          margin: 0 1.5rem;
        `}
      >
        <SnsShareButton onClick={handleModalOpen} />
      </div>

      <SnsShareModal
        shareUrl={shareUrl}
        shareTitle={shareTitle}
        handleModalOpen={handleModalOpen}
        handleModalClose={handleModalClose}
        isOpen={isOpen}
      />
    </>
  )
}
