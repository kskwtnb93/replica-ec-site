'use client'

import { css } from '@kuma-ui/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function HeaderLogo() {
  // const router = useRouter()
  const pathname = usePathname()
  // const searchParams = useSearchParams()
  const isHome = pathname === '/'

  // console.log('useRouter', router)
  // console.log('usePathname', pathname)
  // console.log('useSearchParams', searchParams)
  // console.log('isHome', isHome)

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
      {!isHome ? <Link href="/">MOMOTOWN</Link> : 'MOMOTOWN'}
    </p>
  )
}
