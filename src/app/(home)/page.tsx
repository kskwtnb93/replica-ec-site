import { Box, css } from '@kuma-ui/core'
import HomeCarouselSlider from '@/app/(home)/_components/home-carousel-slider'
import HomeGenderTabs from '@/app/(home)/_components/home-gender-tabs'
import HomeSidebar from '@/app/(home)/_components/home-sidebar'
import TwoColumn from '@/components/columns/two-column'
import Container from '@/components/layouts/container'
import { fetchCampaigns } from '@/utils'
import {
  fetchFirstCategories,
  fetchSecondCategories,
  fetchThirdCategoriesAll,
} from '@/utils/category'

import type { CampaignType } from '@/types'
import type { FirstCategoryType } from '@/types/category'

export default async function Page() {
  const firstCategories: FirstCategoryType[] =
    await fetchFirstCategories('no-store')
  const secondCategories: SecondCategoryType[] =
    await fetchSecondCategories('no-store')
  const thirdCategories: ThirdCategoryType[] =
    await fetchThirdCategoriesAll('no-store')
  const campaigns: CampaignType[] = await fetchCampaigns('no-store')

  return (
    <div
      className={css`
        flex: 1;
      `}
    >
      <Container>
        <div
          className={css`
            position: relative;
            padding-top: 2rem;
            margin-bottom: -2rem;
            z-index: 2;
          `}
        >
          <HomeGenderTabs categories={firstCategories} />
        </div>
      </Container>

      <HomeCarouselSlider campaigns={campaigns} />

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
