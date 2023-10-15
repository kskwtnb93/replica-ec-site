import { css } from '@kuma-ui/core'
import Container from '@/components/layout/container'
import { getCategories1, getProducts } from '@/utils'

import type { Categories1 } from '@/types/categories'
import type { ProductContents } from '@/types/products'

export default async function Page() {
  const fields = ['id', 'brand_name', 'sex', 'main_image', 'price']
  const data: ProductContents[] = await getProducts(100, 0, fields)
  const data1: Categories1[] = await getCategories1('no-store')

  console.log(data)
  console.log(data1)

  return (
    <>
      <Container>
        <div
          className={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            padding: 1.5rem 0;
          `}
        >
          <p
            className={css`
              flex: 1;
              text-align: center;
              padding: 1rem;
              background-color: rgba(45, 45, 45, 7%);
            `}
          >
            ALL
          </p>
          <p
            className={css`
              flex: 1;
              text-align: center;
              padding: 1rem;
              background-color: rgba(45, 45, 45, 7%);
            `}
          >
            MENS
          </p>
          <p
            className={css`
              flex: 1;
              text-align: center;
              padding: 1rem;
              background-color: rgba(45, 45, 45, 7%);
            `}
          >
            WOMENS
          </p>
        </div>
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
