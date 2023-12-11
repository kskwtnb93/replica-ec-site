import { MouseEvent } from 'react'
import { css } from '@kuma-ui/core'
import { useSelector } from 'react-redux'

import CloseButton from '@/app/_components/layouts/header/nav-menu/close-button'
import Heading from '@/app/_components/layouts/header/nav-menu/heading'
import ListItem from '@/app/_components/layouts/header/nav-menu/list-item'
import Overlay from '@/app/_components/overlay.tsx'
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
            <ul key={data.id}>
              <Heading as="li" text={data.text} />

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
            </ul>
          ))}
        </div>
      </nav>

      <Overlay isOpen={isOpen} onClick={onClick} />
    </div>
  )
}
