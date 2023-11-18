import { css } from '@kuma-ui/core'
import Link from 'next/link'

import { IconArrowRight } from '@/components/icons'

type Props = {
  text: string
  href?: string
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function ListItem({ text, href, onClick }: Props) {
  return (
    <li
      className={css`
        border-bottom: 0.1rem solid rgba(45, 45, 45, 0.05);
      `}
    >
      {href ? (
        <Link href={href} onClick={onClick}>
          <span
            className={css`
              display: flex;
              align-items: center;
              padding: 1rem 1.5rem;
              min-height: 6rem;
            `}
          >
            <span
              className={css`
                flex-basis: 100%;
                font-size: 14px;
                font-weight: 600;
                line-height: 1.5;
              `}
            >
              {text}
            </span>
            <IconArrowRight width="2.3rem" height="2.3rem" color="#23abdd" />
          </span>
        </Link>
      ) : (
        <span
          className={css`
            display: flex;
            align-items: center;
            padding: 1rem 1.5rem;
            min-height: 6rem;
          `}
        >
          <span
            className={css`
              flex-basis: 100%;
              font-size: 14px;
              font-weight: 600;
              line-height: 1.5;
            `}
          >
            {text}
          </span>
          <IconArrowRight width="2.3rem" height="2.3rem" color="#23abdd" />
        </span>
      )}
    </li>
  )
}
