import { css } from '@kuma-ui/core'
import GenderTabs from '@/components/home/gender-tabs'
import Container from '@/components/layout/container'
import { getFirstCategories } from '@/utils/categories'

import type { FirstCategoryType } from '@/types/categories'

export default async function Page() {
  const firstCategories: FirstCategoryType[] =
    await getFirstCategories('no-store')

  return (
    <>
      <Container>
        <GenderTabs categories={firstCategories} />
      </Container>

      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            background-color: rgba(45, 45, 45, 7%);
            height: 18rem;
          `}
        >
          Slide 1
        </div>
      </div>

      <Container>
        <div
          className={css`
            padding: 2rem 0;
          `}
        >
          <p>アイテムランキング</p>
          <div>
            <div>アイテムカードUIスライダー</div>
          </div>
        </div>

        <div
          className={css`
            padding: 2rem 0;
          `}
        >
          <p>アイテムを探す</p>
          <div>
            <div>トップス</div>
            <div>ジャケット／アウター</div>
            <div>パンツ</div>
          </div>
        </div>
      </Container>
    </>
  )
}
