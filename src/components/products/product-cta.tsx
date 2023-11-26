'use client'

import AddCartButton from '@/components/buttons/add-to-cart-button.tsx'

export default function ProductCta() {
  function addToCartHandler() {
    console.log('Add to cart.')
  }

  return (
    <>
      <AddCartButton onClick={addToCartHandler} />
    </>
  )
}
