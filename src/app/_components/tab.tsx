'use client'

import { styled } from '@kuma-ui/core'

type Props = {
  kind: 'link' | 'button'
  active: boolean
  label: string
  onClick?: () => void
}

export default function Tab({ kind, active, label, onClick }: Props) {
  return kind === 'button' && !active ? (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  ) : (
    <StyledActiveButton onClick={onClick} disabled>
      {label}
    </StyledActiveButton>
  )
}

// export const StyledLink = styled(Link)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 15rem;
//   min-height: 4.5rem;
//   padding: 0.5em;
//   border-radius: 0.4rem 0.4rem 0 0;
//   font-size: 1.5rem;
//   font-weight: bold;
//   text-align: center;
//   color: #a0a0a0;
//   background-color: #f8f8f8;

//   @media screen and (max-width: 576px) {
//     width: auto;
//     border-radius: 0;
//     min-height: 5.2rem;
//   }
// `
// export const StyledActiveLink = styled(StyledLink)`
//   pointer-events: none;
//   min-height: 5.1rem;
//   margin-bottom: -0.1rem;
//   color: #2d2d2d;
//   border: 0.1rem solid rgba(45, 45, 45, 0.07);
//   border-bottom: none;
//   background-color: #fff;
// `
export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  min-height: 4.5rem;
  padding: 0.5em;
  border-radius: 0.4rem 0.4rem 0 0;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #a0a0a0;
  background-color: #f8f8f8;

  @media screen and (max-width: 576px) {
    flex: 1;
    width: auto;
    border-radius: 0;
    min-height: 5.2rem;
    font-size: 1.4rem;
    border: 0.1rem solid #f8f8f8;

    &:first-child {
      border-left: none;
    }

    &:last-child {
      border-right: none;
    }
  }
`
export const StyledActiveButton = styled(StyledButton)`
  min-height: 5.1rem;
  margin-bottom: -0.1rem;
  color: #2d2d2d;
  border: 0.1rem solid rgba(45, 45, 45, 0.07);
  border-bottom: none;
  background-color: #fff;

  @media screen and (max-width: 576px) {
    min-height: 5.2rem;
    border-top: none;
    margin-bottom: 0;
  }
`
