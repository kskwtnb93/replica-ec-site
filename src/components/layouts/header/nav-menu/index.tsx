import { MouseEvent } from 'react'
import { css } from '@kuma-ui/core'
import { useSelector } from 'react-redux'

import CloseButton from '@/components/layouts/header/nav-menu/close-button'
import Heading from '@/components/layouts/header/nav-menu/heading'
import ListItem from '@/components/layouts/header/nav-menu/list-item'
import { selectGender } from '@/redux/slices/gender'

type Props = {
  isOpen: boolean
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

export default function NavMenu({ isOpen, onClick }: Props) {
  const { gender } = useSelector(selectGender)

  const menuData = [
    {
      id: 'search',
      text: 'アイテムを探す',
      contents: [
        {
          id: 'category',
          text: 'カテゴリーから探す',
          href: `/${gender}/`,
        },
      ],
    },
  ]

  return (
    <div>
      <nav
        className={
          isOpen
            ? css`
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                width: 85%;
                min-width: 275px;
                max-width: 325px;
                background-color: #fff;
                transform: translateX(0);
                transition: all 0.15s linear;
                z-index: 1000;
              `
            : css`
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                width: 85%;
                min-width: 275px;
                max-width: 325px;
                background-color: #fff;
                transform: translateX(calc(-100% - 4rem));
                transition: all 0.15s linear;
                z-index: 1000;
              `
        }
      >
        <div
          className={css`
            position: absolute;
            top: 0;
            right: -4rem;
          `}
        >
          <CloseButton onClick={onClick} />
        </div>

        <div>
          {menuData.map((data) => (
            <section key={data.id}>
              <Heading as="h2" text={data.text} />

              <ul>
                {data.contents.map((child) => (
                  <ListItem
                    key={child.id}
                    text={child.text}
                    href={child.href}
                    currentGender={gender}
                    onClick={onClick}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </nav>

      <div
        onClick={onClick}
        className={
          isOpen
            ? css`
                position: fixed;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                z-index: 1;
                display: block;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 50%);
                transition: all 0.15s linear;
                opacity: 0.8;
              `
            : css`
                pointer-events: none;
                position: fixed;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                z-index: 1;
                display: block;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 50%);
                transition: all 0.15s linear;
                opacity: 0;
              `
        }
      ></div>
    </div>
  )
}
