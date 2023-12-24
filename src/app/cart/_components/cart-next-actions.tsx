'use client'

import React, { useRef } from 'react'
import { css } from '@kuma-ui/core'
import Link from 'next/link'

import Button from '@/app/_components/buttons/button'
import Dialog from '@/app/_components/dialog'

type DialogType = {
  showModal: () => void
  close: () => void
}

export default function CartNextActions() {
  const dialogRef = useRef<DialogType>(null)

  function openDialogHandler() {
    dialogRef.current?.showModal()
  }

  return (
    <>
      <div
        className={css`
          @media (min-width: 769px) {
            padding: 2.5rem 3rem;
            border-radius: 0.6rem;
            box-shadow: 0.1rem 0 0.5rem 0.4rem rgba(69, 145, 175, 0.6);
          }
        `}
      >
        <Button text="レジへ進む" onClick={openDialogHandler} />

        <Link
          href="/"
          className={css`
            display: block;
            margin-top: 3rem;
            font-size: 1.3rem;
            text-align: center;
            line-height: 1.384615384615385;
            color: #23abdd;

            @media (max-width: 768px) {
              display: none;
            }
          `}
        >
          ショッピングを続ける
        </Link>
      </div>

      <Dialog ref={dialogRef}>
        <p
          className={css`
            font-size: 1.4rem;
          `}
        >
          ※当サイトはデモンストレーションのため、実際の商品の購入や決済は行われません。
        </p>
      </Dialog>
    </>
  )
}
