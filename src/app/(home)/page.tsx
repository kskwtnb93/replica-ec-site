import { css } from '@kuma-ui/core'
import HomeBanner from '@/app/(home)/_components/home-banner'
import HomeCarouselSlider from '@/app/(home)/_components/home-carousel-slider'
import HomeSidebar from '@/app/(home)/_components/home-sidebar'
import GenderTabs from '@/app/_components/gender-tabs'
import TwoColumn from '@/app/_components/layouts/columns/two-column'
import Container from '@/app/_components/layouts/container'
import { fetchCampaigns } from '@/utils'
import {
  fetchFirstCategories,
  fetchSecondCategories,
  fetchThirdCategoriesAll,
} from '@/utils/category'

import type { CampaignType } from '@/types'
import type {
  FirstCategoryType,
  SecondCategoryType,
  ThirdCategoryType,
} from '@/types/category'

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
            padding: 2rem 0;
            z-index: 2;

            @media (max-width: 576px) {
              padding: 1.5rem 0;
            }
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
                padding: 2rem 0 0;
              }
            `}
          >
            <TwoColumn
              main={
                <>
                  <div
                    className={css`
                      @media (min-width: 577px) {
                        min-height: 100rem;
                      }
                    `}
                  >
                    <HomeBanner />
                  </div>
                </>
              }
              sidebar={
                <div
                  className={css`
                    @media (max-width: 576px) {
                      padding-top: 5rem;
                    }
                  `}
                >
                  <HomeSidebar
                    secondCategories={secondCategories}
                    thirdCategories={thirdCategories}
                  />
                </div>
              }
            />
          </div>
        </Container>
      </div>
    </div>
  )
}
