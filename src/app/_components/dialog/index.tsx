'use client'

import React, { useImperativeHandle, useRef } from 'react'

import { css } from '@kuma-ui/core'
import CloseIconButton from '@/app/_components/dialog/close-icon-button'

type Props = {
  children: React.ReactNode
}

type DialogType = {
  showModal: () => void
  close: () => void
}

export default React.forwardRef(function Dialog({ children }: Props, ref) {
  const dialogRef = useRef<DialogType>(null)

  useImperativeHandle(ref, () => ({
    showModal: () => {
      dialogRef.current?.showModal()
    },
    close: () => {
      dialogRef.current?.close()
    },
  }))

  function closeDialogHandler() {
    dialogRef.current?.close()
  }

  return (
    <dialog
      ref={dialogRef as unknown as React.RefObject<HTMLDialogElement>}
      onClick={closeDialogHandler}
      className={css`
        position: relative;
        border-radius: 1rem;
        min-width: 56rem;
        background: #ffffff;

        @keyframes show1 {
          from {
            opacity: 0;
            transform: translateY(3rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes show2 {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        &[open] {
          animation: show1 0.15s linear 0s;
        }

        &::backdrop {
          background: rgba(0, 0, 0, 0.5);
        }

        &:modal::backdrop {
          background: rgba(0, 0, 0, 50%);
          animation: show2 0.15s linear 0s;
        }

        @media (max-width: 768px) {
          min-width: inherit;
          width: calc(100% - 6rem);
        }
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 16rem;
          padding: 4rem 2.5rem;
          transition: all 0.2s ease-in-out;
          animation: hidden 0.2s linear 0s;
        `}
      >
        <div>{children}</div>

        <div
          className={css`
            position: absolute;
            z-index: 1;
            top: -1.2rem;
            right: -1.2rem;
          `}
        >
          <CloseIconButton onClick={closeDialogHandler} />
        </div>
      </div>
    </dialog>
  )
})
