import { css } from '@kuma-ui/core'

export default function NotFoundContents() {
  return (
    <div
      className={css`
        padding: 14.4rem 0;
        display: flex;
        justify-content: center;
      `}
    >
      <div>
        <h1
          className={css`
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
          `}
        >
          ご指定のページがみつかりません
        </h1>
        <p
          className={css`
            font-size: 1.4rem;
            color: gray;
            line-height: 1.8;
          `}
        >
          MOMOTOWNをご利用いただきありがとうございます。
          <br />
          申し訳ございませんが、検索中のページは存在しないか、
          <br />
          名前変更のため一時的にご利用が不可能です。
        </p>
      </div>
    </div>
  )
}
