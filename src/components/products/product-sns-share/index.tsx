'use client'

import { useState } from 'react'

import { css } from '@kuma-ui/core'
import SnsShareButton from '@/components/buttons/sns-share-button'
import SnsShareModal from '@/components/products/product-sns-share/sns-share-modal'

type Props = {
  shareTitle: string
  shareUrl: string
}

export default function ProductSnsShare({ shareUrl, shareTitle }: Props) {
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
