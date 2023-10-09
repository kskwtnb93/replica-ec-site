import { headers } from 'next/headers'

export function isPcDevice(): boolean {
  const viewport = headers().get('viewport')
  // console.log(viewport)
  return viewport === 'pc'
}
