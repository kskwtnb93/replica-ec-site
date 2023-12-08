import { css } from '@kuma-ui/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HeaderLogo() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <p
      className={css`
        order: 2;
        font-size: 2rem;
        font-weight: bold;

        @media (max-width: 980px) {
          font-size: 1.6rem;
        }
      `}
    >
      {!isHome ? (
        <Link href="/">MOMOTOWN</Link>
      ) : (
        <span
          className={css`
            user-select: none;
          `}
        >
          MOMOTOWN
        </span>
      )}
    </p>
  )
}
