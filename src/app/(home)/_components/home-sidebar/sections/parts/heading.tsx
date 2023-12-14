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
        // font-weight: bold;
        // text-overflow: ellipsis;
        // word-break: break-word;
        // word-wrap: normal;
        // font-size: 1.5rem;
        // line-height: 1.7333;
        // color: #2d2d2d;
        // margin-bottom: 1rem;
        font-weight: bold;
        text-overflow: ellipsis;
        word-break: break-word;
        word-wrap: normal;
        font-size: 2rem;
        line-height: 1.7;
        color: #2d2d2d;
        margin-bottom: 1.5rem;

        @media (max-width: 576px) {
          font-size: 1.6rem;
          line-height: 1.6875;
          margin-bottom: 1.7rem;
        }
      `}
    >
      {text}
    </Tag>
  )
}
