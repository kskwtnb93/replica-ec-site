import { css } from '@kuma-ui/core'
import Link from 'next/link'

import { IconArrowRight } from '@/components/icons'

import type { BreadcrumbType } from '@/types'

type Props = {
  data: BreadcrumbType[]
}

export default function Breadcrumb({ data }: Props) {
  return (
    <nav>
      <ol
        className={css`
          display: flex;
          align-items: center;
        `}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className={css`
              display: flex;
              align-items: center;
              font-size: 1.3rem;
              line-height: 1;
              color: #a0a0a0;
              white-space: nowrap;
            `}
          >
            {!item.href ? (
              item.text
            ) : (
              <>
                <Link
                  href={item.href}
                  className={css`
                    color: #23abdd;

                    &:hover {
                      text-decoration: underline;
                    }
                  `}
                >
                  {item.text}
                </Link>
                <span
                  className={css`
                    display: flex;
                    align-items: center;
                    margin: 0 0.5rem;
                  `}
                >
                  <IconArrowRight
                    width="1.6rem"
                    height="1.6rem"
                    color="#a0a0a0"
                  />
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
