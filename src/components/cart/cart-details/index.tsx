import CartDetailsBody from '@/components/cart/cart-details/cart-details-body'
import ReduxProvider from '@/components/redux-provider'

export default function CartDetails() {
  return (
    <ReduxProvider>
      <CartDetailsBody />
    </ReduxProvider>
  )
}
