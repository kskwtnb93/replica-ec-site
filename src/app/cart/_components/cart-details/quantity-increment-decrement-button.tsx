'use client'

import { css, styled } from '@kuma-ui/core'
import { useDispatch } from 'react-redux'

import { decrementQuantity, incrementQuantity } from '@/redux/slices/cart'

type Props = {
  id: string
  quantity: number
}

export const QuantityBoxStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border: 0.1rem solid #e9e9e9;
  font-size: 1.3rem;
`

export const BaseButtonStyle = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  width: 2.2rem;
  height: 2.8rem;
  background: #f8f8f8;
  color: #0088cc;
  font-size: 1.5rem;
  text-decoration: none;
  border: 0.1rem solid #e9e9e9;

  @media (max-width: 980px) {
    &:hover {
      background: #2490d0;
      color: #ffffff;
    }
  }
`

export const DecrementButton = styled(BaseButtonStyle)`
  border-radius: 0.4rem 0 0 0.4rem;
  border-right: none;
`

export const IncrementButton = styled(BaseButtonStyle)`
  border-radius: 0 0.4rem 0.4rem 0;
  border-left: none;
`

export default function QuantityIncrementDecrementButton({
  id,
  quantity,
}: Props) {
  const dispatch = useDispatch()

  const handleDecrement = (id: string) => {
    dispatch(decrementQuantity(id))
  }

  const handleIncrement = (id: string) => {
    dispatch(incrementQuantity(id))
  }

  return (
    <div
      className={css`
        display: flex;
        overflow: hidden;
      `}
    >
      {quantity > 1 && (
        <DecrementButton onClick={() => handleDecrement(id)}>-</DecrementButton>
      )}
      <QuantityBoxStyle>{quantity}</QuantityBoxStyle>
      <IncrementButton onClick={() => handleIncrement(id)}>+</IncrementButton>
    </div>
  )
}
