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
        padding: 1rem 1.5rem;
        font-size: 1.2rem;
        line-height: 1.5;
        color: rgb(160, 160, 160);
        background-color: rgb(248, 248, 248);
        border-top: 0.1rem solid rgba(45, 45, 45, 0.05);
        border-bottom: 0.1rem solid rgba(45, 45, 45, 0.05);
      `}
    >
      {text}
    </Tag>
  )
}
