import { css } from '@kuma-ui/core'

type Props = {
  main: React.ReactNode
  sidebar: React.ReactNode
}

export default function TwoColumn({ main, sidebar }: Props) {
  return (
    <div
      className={css`
        display: grid;
        gap: 40px;
        grid-template-columns: 180px auto;

        @media (max-width: 576px) {
          display: block;
        }
      `}
    >
      <div
        className={css`
          order: 2;
        `}
      >
        {main}
      </div>

      <div
        className={css`
          order: 1;
        `}
      >
        {sidebar}
      </div>
    </div>
  )
}
