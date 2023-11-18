import Link from 'next/link'

import { IconCart } from '@/components/icons'

export default function CartLink() {
  return (
    <Link href="/">
      <IconCart width="2.8rem" height="2.8rem" color="#2d2d2d" />
    </Link>
  )
}
