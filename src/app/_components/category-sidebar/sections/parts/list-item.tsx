import { css } from '@kuma-ui/core'
import Link from 'next/link'

import CloseButton from '@/app/_components/category-sidebar/sections/parts/close-button'

type Props = {
  text: string
  href: string
  selected: boolean
  closeHandlerArg: string
  isChild?: boolean
  children?: React.ReactNode
}

export default function ListItem({
  text,
  href,
  selected,
  closeHandlerArg,
  isChild,
  children,
}: Props) {
  return (
    <li
      className={css`
        + li {
          margin-top: 0.1rem;
        }
      `}
    >
      <Link
        href={href}
        className={
          selected
            ? css`
                display: block;
                position: relative;
                font-size: 1.3rem;
                color: #2d2d2d;
                background-color: rgba(0, 0, 0, 0.05);
                pointer-events: none;
              `
            : css`
                display: block;
                position: relative;
                font-size: 1.3rem;
                color: #2d2d2d;

                &:hover {
                  background-color: rgba(0, 0, 0, 0.05);
                }
              `
        }
      >
        <span
          className={
            isChild
              ? css`
                  display: block;
                  padding: 0.7rem 3.5rem 0.6rem 2.7rem;
                  line-height: 1.4;
                  word-break: auto-phrase;
                `
              : css`
                  display: block;
                  padding: 0.7rem 3.5rem 0.6rem 1.4rem;
                  line-height: 1.6;
                  word-break: auto-phrase;
                `
          }
        >
          {text}
        </span>

        {selected && (
          <span
            className={css`
              display: block;
              position: absolute;
              right: 1rem;
              top: 50%;
              pointer-events: auto;
            `}
          >
            <CloseButton closeHandlerArg={closeHandlerArg} />
          </span>
        )}
      </Link>

      {children && children}
    </li>
  )
}
