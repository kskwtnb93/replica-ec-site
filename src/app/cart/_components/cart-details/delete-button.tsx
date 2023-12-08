'use client'

import { css } from '@kuma-ui/core'
import { useDispatch } from 'react-redux'

import { removeCartItem } from '@/redux/slices/cart'

type Props = {
  id: string
}

export default function DeleteButton({ id }: Props) {
  const dispatch = useDispatch()

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(id))
  }

  return (
    <button
      onClick={handleRemoveCartItem}
      className={css`
        cursor: pointer;
        color: #888888;
        text-decoration: underline;
      `}
    >
      削除する
    </button>
  )
}
