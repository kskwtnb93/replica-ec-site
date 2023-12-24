'use client'

import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

import Button from '@/app/_components/buttons/button'
import { IconCart } from '@/app/_components/icons'
import { addToCart } from '@/redux/slices/cart'

import type { ProductContentsType } from '@/types/product'

type Props = {
  product: ProductContentsType
}

export default function AddToCart({ product }: Props) {
  const router = useRouter()
  const dispatch = useDispatch()

  function addToCartHandler() {
    dispatch(addToCart(product))
    router.push('/cart/')
  }

  return (
    <Button
      text="レジへ進む"
      icon={<IconCart width="2.2rem" height="2.2rem" color="#ffffff" />}
      onClick={addToCartHandler}
    />
  )
}
