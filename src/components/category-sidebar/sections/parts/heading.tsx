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
        font-size: 1.7rem;
        line-height: 1.6;
        font-weight: bold;
        color: #2d2d2d;
        padding-left: 1rem;
        margin-bottom: 0.6rem;
      `}
    >
      {text}
    </Tag>
  )
}
