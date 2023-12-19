import { css } from '@kuma-ui/core'

type Props = {
  as: React.ElementType
  text: string
}

export default function Heading({ as, text }: Props) {
  const Tag = as

  return (
    <Tag
      className={css`
        font-size: 2.8rem;
        font-weight: 600;
        line-height: 1.6875;

        @media (max-width: 576px) {
          font-size: 1.8rem;
          line-height: 1.5;
          text-align: center;
        }
      `}
    >
      {text}
    </Tag>
  )
}
