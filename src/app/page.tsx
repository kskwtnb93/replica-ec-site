import { Box, css } from '@kuma-ui/core'
import TwoColumn from '@/components/columns/two-column'
import HomeGenderTabs from '@/components/home/home-gender-tabs'
import HomeSidebar from '@/components/home/home-sidebar'
import Container from '@/components/layouts/container'
import {
  fetchFirstCategories,
  fetchSecondCategories,
  fetchThirdCategoriesAll,
} from '@/utils/category'

import type { FirstCategoryType } from '@/types/category'

export default async function Page() {
  const firstCategories: FirstCategoryType[] =
    await fetchFirstCategories('no-store')
  const secondCategories: SecondCategoryType[] =
    await fetchSecondCategories('no-store')
  const thirdCategories: ThirdCategoryType[] =
    await fetchThirdCategoriesAll('no-store')

  return (
    <div
      className={css`
        flex: 1;
      `}
    >
      <Container>
        <HomeGenderTabs categories={firstCategories} />
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

      <div
        className={css`
          background-color: #f8f8f8;
        `}
      >
        <Container>
          <Box p="4rem 0 6rem">
            <TwoColumn
              main={
                <>
                  <div
                    className={css`
                      min-height: 100vh;
                    `}
                  >
                    main
                  </div>
                </>
              }
              sidebar={
                <HomeSidebar
                  firstCategories={firstCategories}
                  secondCategories={secondCategories}
                  thirdCategories={thirdCategories}
                />
              }
            />
          </Box>
        </Container>
      </div>
    </div>
  )
}
