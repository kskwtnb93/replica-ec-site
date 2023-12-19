'use client'

import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

import AddCartButton from '@/app/_components/buttons/add-to-cart-button'
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

  return <AddCartButton onClick={addToCartHandler} />
}
