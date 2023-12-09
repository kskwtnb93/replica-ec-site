'use client'

import { css, Text } from '@kuma-ui/core'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { selectGender, switchGender } from '@/redux/slices/gender'

import type { FirstCategoryType } from '@/types/category'

type Props = {
  category: FirstCategoryType
  isLink?: boolean
}

export default function GenderTab({ category, isLink }: Props) {
  const dispatch = useDispatch()
  const { gender } = useSelector(selectGender)
  const activeStyle = css`
    flex: 1;
    display: block;
    text-align: center;
    padding: 1rem;
    font-weight: bold;
    border-radius: 0.8rem;
    background-color: rgba(45, 45, 45, 7%);
  `
  const normalStyle = css`
    flex: 1;
    display: block;
    text-align: center;
    padding: 1rem;
    font-weight: bold;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: all ease-in 0.15s;

    &:hover {
      opacity: 0.6;
    }
  `

  return isLink ? (
    <Link
      onClick={() => dispatch(switchGender(category.id))}
      href={`/${category.id}/`}
      className={gender === category.id ? activeStyle : normalStyle}
    >
      <Text as="span" color={category.color}>
        {category.en_name}
      </Text>
    </Link>
  ) : (
    <button
      onClick={() => dispatch(switchGender(category.id))}
      className={gender === category.id ? activeStyle : normalStyle}
    >
      <Text as="span" color={category.color}>
        {category.en_name}
      </Text>
    </button>
  )
}
