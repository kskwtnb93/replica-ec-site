'use client'

import { css, Text } from '@kuma-ui/core'
import { useDispatch, useSelector } from 'react-redux'

import { selectGender, switchGender } from '@/redux/slices/gender'

import type { FirstCategory } from '@/types/categories'

export default function GenderTab({ id, color, en_name }: FirstCategory) {
  const dispatch = useDispatch()
  const { gender } = useSelector(selectGender)

  return (
    <button
      onClick={() => dispatch(switchGender(id))}
      className={
        gender === id
          ? css`
              flex: 1;
              display: block;
              text-align: center;
              padding: 1rem;
              font-weight: bold;
              border-radius: 0.8rem;
              background-color: rgba(45, 45, 45, 7%);
            `
          : css`
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
                // background-color: rgba(45, 45, 45, 7%);
              }
            `
      }
    >
      <Text as="span" color={color}>
        {en_name}
      </Text>
    </button>
  )
}
