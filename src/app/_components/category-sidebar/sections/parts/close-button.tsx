'use client'

import { css } from '@kuma-ui/core'
import { useRouter } from 'next/navigation'

import { IconClose } from '@/app/_components/icons'

type Props = {
  closeHandlerArg: string
}

export default function CloseButton({ closeHandlerArg }: Props) {
  const router = useRouter()

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        router.push(closeHandlerArg)
      }}
      className={css`
        width: 2rem;
        height: 2rem;
        background-color: #d1d1d1;
        border-radius: 50%;
        margin-top: -1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        pointer-events: auto;
        cursor: pointer;
      `}
    >
      <IconClose width="1.6rem" height="1.6rem" color="#ffffff" />
    </button>
  )
}
