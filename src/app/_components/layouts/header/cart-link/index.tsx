import CartLinkBody from '@/app/_components/layouts/header/cart-link/cart-link-body'
import ReduxProvider from '@/app/_components/redux-provider'

export default function CartLink() {
  return (
    <ReduxProvider>
      <CartLinkBody />
    </ReduxProvider>
  )
}
