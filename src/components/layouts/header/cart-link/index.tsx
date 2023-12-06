import CartLinkBody from '@/components/layouts/header/cart-link/cart-link-body'
import ReduxProvider from '@/components/redux-provider'

export default function CartLink() {
  return (
    <ReduxProvider>
      <CartLinkBody />
    </ReduxProvider>
  )
}
