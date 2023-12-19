import ReduxProvider from '@/app/_components/redux-provider'
import CartDetailsBody from '@/app/cart/_components/cart-details/cart-details-body'

export default function CartDetails() {
  return (
    <ReduxProvider>
      <CartDetailsBody />
    </ReduxProvider>
  )
}
