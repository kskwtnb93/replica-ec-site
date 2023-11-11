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
        margin-bottom: 3rem;
      `}
    >
      {text}
    </Tag>
  )
}
