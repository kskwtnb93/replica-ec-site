'use client'

import { useState } from 'react'

import { css } from '@kuma-ui/core'
import Container from '@/components/layouts/container'
import CartLink from '@/components/layouts/header/cart-link'
import Logo from '@/components/layouts/header/logo'
import MenuButton from '@/components/layouts/header/menu-button'
import NavMenu from '@/components/layouts/header/nav-menu'
import ReduxProvider from '@/components/redux-provider'

export default function Header() {
  const [isOpen, setOpen] = useState<boolean>(false)

  const handleMenuOpen = () => {
    setOpen(!isOpen)
  }

  const handleMenuClose = () => {
    setOpen(false)
  }

  return (
    <header
      className={css`
        background-color: #efefef;
      `}
    >
      <Container>
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 0;
          `}
        >
          <div
            className={css`
              order: 2;
            `}
          >
            <Logo />
          </div>

          <div
            className={css`
              order: 1;
            `}
          >
            <MenuButton onClick={handleMenuOpen} />
          </div>

          <div
            className={css`
              order: 2;
            `}
          >
            <CartLink />
          </div>
        </div>
      </Container>

      <ReduxProvider>
        <NavMenu isOpen={isOpen} onClick={handleMenuClose} />
      </ReduxProvider>
    </header>
  )
}
