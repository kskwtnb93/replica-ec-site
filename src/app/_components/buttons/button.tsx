// 'use client'

import { css } from '@kuma-ui/core'
import Link from 'next/link'

type Props = {
  asButton?: boolean | null
  text: string
  variant?: 'primary' | 'secondary' | null
  // <IconCart width="2.2rem" height="2.2rem" color="#ffffff" />のような値を想定
  icon?: React.ReactNode | null
  href?: string | null
  onClick?: () => void | null
}

export default function Button({
  asButton = true,
  text,
  variant = 'primary',
  icon,
  href,
  onClick,
}: Props) {
  const primaryStyle = css`
    width: 100%;
    align-items: center;
    appearance: none;
    cursor: pointer;
    display: inline-flex;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
    line-height: 1;
    margin: 0;
    outline: 0;
    padding: 0.5rem;
    border-radius: 0.8rem;
    min-height: 5rem;
    background-color: #23abdd;
    color: #fff;
    opacity: 1;
    transition: opacity 0.15s;

    &:hover {
      opacity: 0.8;
    }
  `
  const secondaryStyle = css`
    width: 100%;
    align-items: center;
    appearance: none;
    cursor: pointer;
    display: inline-flex;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
    line-height: 1;
    margin: 0;
    outline: 0;
    padding: 0.5rem;
    border-radius: 0.8rem;
    min-height: 5rem;
    color: #23abdd;
    border: 0.1rem solid #23abdd;
    opacity: 1;
    transition: opacity 0.15s;

    &:hover {
      opacity: 0.8;
    }
  `

  let Style
  if (variant === 'primary') {
    Style = primaryStyle
  } else if (variant === 'secondary') {
    Style = secondaryStyle
  }

  return asButton ? (
    <button
      type="button"
      onClick={onClick ? onClick : undefined}
      className={Style}
    >
      {icon ?? (
        <span
          className={css`
            margin-right: 0.5rem;
          `}
        >
          {icon}
        </span>
      )}
      {text}
    </button>
  ) : (
    <Link href={href ? href : '/'} className={Style}>
      {icon ?? (
        <span
          className={css`
            margin-right: 0.5rem;
          `}
        >
          {icon}
        </span>
      )}
      {text}
    </Link>
  )
}
