'use client'

import { css } from '@kuma-ui/core'
import CloseIconButton from '@/app/_components/dialog/close-icon-button'
import Overlay from '@/app/_components/dialog/overlay'

type Props = {
  isOpen: boolean
  // handleModalOpen: () => void
  handleModalClose: () => void
  children: React.ReactNode
}

export default function Dialog({
  isOpen,
  // handleModalOpen,
  handleModalClose,
  children,
}: Props) {
  return (
    isOpen && (
      <>
        <div
          className={css`
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
          `}
        >
          <div
            className={css`
              pointer-events: auto;
              width: 100%;
            `}
          >
            <div
              className={css`
                position: relative;
                width: 100%;
                max-width: 42rem;
                margin: 0 auto;
                padding: 2rem 1.5rem 1.6rem;
                background: #ffffff;
                border-radius: 1rem;
              `}
            >
              {children}
              <div
                className={css`
                  position: absolute;
                  z-index: 1;
                  top: -1.2rem;
                  right: -1.2rem;
                `}
              >
                <CloseIconButton onClick={handleModalClose} />
              </div>
            </div>
          </div>
        </div>

        <Overlay isOpen={isOpen} onClick={handleModalClose} />
      </>
    )
  )
}
