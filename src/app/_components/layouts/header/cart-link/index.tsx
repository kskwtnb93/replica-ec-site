import CartLinkContainer from '@/app/_components/layouts/header/cart-link/cart-link-container'
import ReduxProvider from '@/app/_components/redux-provider'

export default function CartLink() {
  return (
    <ReduxProvider>
      <CartLinkContainer />
    </ReduxProvider>
  )
}
