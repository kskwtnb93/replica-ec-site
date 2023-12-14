import { css } from '@kuma-ui/core'
import HomeCarouselSlider from '@/app/(home)/_components/home-carousel-slider'
import HomeSidebar from '@/app/(home)/_components/home-sidebar'
import TwoColumn from '@/app/_components/columns/two-column'
import GenderTabs from '@/app/_components/gender-tabs'
import Container from '@/app/_components/layouts/container'
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
          <GenderTabs categories={firstCategories} isLink={false} />
        </div>
      </Container>

      <HomeCarouselSlider campaigns={campaigns} />

      <div
        className={css`
          background-color: #f8f8f8;
        `}
      >
        <Container>
          <div
            className={css`
              padding: 4rem 0 6rem;

              @media (max-width: 576px) {
                padding: 4rem 0 0;
              }
            `}
          >
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
          </div>
        </Container>
      </div>
    </div>
  )
}
