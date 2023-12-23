import ReduxProvider from '@/app/_components/redux-provider'
import CartMainContainer from '@/app/cart/_components/cart-main/cart-main-container'

export default function CartMain() {
  return (
    <ReduxProvider>
      <CartMainContainer />
    </ReduxProvider>
  )
}
