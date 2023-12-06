import CartDetailsContainer from '@/components/cart/cart-details/cart-details-container'
import ReduxProvider from '@/components/redux-provider'

export default function CartDetails() {
  return (
    <ReduxProvider>
      <CartDetailsContainer />
    </ReduxProvider>
  )
}
