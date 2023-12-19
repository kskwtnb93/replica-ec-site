'use client'

import { useState } from 'react'

import { css } from '@kuma-ui/core'

type Props = {
  headAriaLabel: string
  headChild: React.ReactNode
  bodyChild: React.ReactNode
}

export default function FirstCategoryListAccordion({
  headAriaLabel,
  headChild,
  bodyChild,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleAccordionOpen = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div
      className={
        isOpen
          ? css`
              & .accordion-icon {
                transform: rotate(180deg);
              }
            `
          : ''
      }
    >
      <div
        className={css`
          position: relative;
        `}
      >
        {headChild}
        <button
          onClick={handleAccordionOpen}
          aria-label={headAriaLabel}
          className={css`
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
          `}
        ></button>
      </div>

      <div
        className={
          isOpen
            ? css`
                @media (max-width: 576px) {
                  display: grid;
                  grid-template-rows: 1fr;
                  transition: 250ms grid-template-rows ease;
                }
              `
            : css`
                @media (max-width: 576px) {
                  display: grid;
                  grid-template-rows: 0fr;
                  transition: 250ms grid-template-rows ease;
                }
              `
        }
      >
        <div
          className={css`
            overflow: hidden;
          `}
        >
          {bodyChild}
        </div>
      </div>

      <noscript>{bodyChild}</noscript>
    </div>
  )
}
