import { css } from '@kuma-ui/core'
import Container from '@/app/_components/layouts/container'
import HasBreadcrumbLayout from '@/app/_components/layouts/has-breadcrumb-layout'
// import ProductSnsShare from '@/app/_components/sns-share'
import SnsShareButtons from '@/app/_components/sns-share-buttons'
import TabsContents from '@/app/_components/tab-contents'
import ProductCta from '@/app/products/_components/product-cta'
import ProductInfo from '@/app/products/_components/product-info'
import ProductSlider from '@/app/products/_components/product-slider'
import { fetchProduct } from '@/utils/product'

import type { BreadcrumbType } from '@/types'
import type { ProductContentsType, ImageType } from '@/types/product'

type PageProps = {
  params: {
    productId: string
  }
}

export default async function Page({ params }: PageProps) {
  // const currentUrl = headers().get('referer')

  const product: ProductContentsType = await fetchProduct(
    params.productId,
    'no-store'
  )

  const images: ImageType[] = product.images
  images.unshift(product.main_image)

  // タブエリア用コンテンツ
  const tabsData = [
    {
      id: 1,
      label: 'アイテム説明',
      content: (
        <div
          className={css`
            padding: 3rem 2rem;
            font-size: 1.3rem;
            line-height: 1.84615;
          `}
        >
          <p>{product.description}</p>
        </div>
      ),
    },
    {
      id: 2,
      label: 'サイズ',
      content: (
        <div
          className={css`
            padding: 3rem 2rem;
            font-size: 1.3rem;
            line-height: 1.84615;
          `}
        >
          <p
            className={css`
              color: #ed293e;
            `}
          >
            現在表示できるコンテンツがありません。
          </p>
        </div>
      ),
    },
    {
      id: 3,
      label: 'コーデ',
      content: (
        <div
          className={css`
            font-size: 1.3rem;
            line-height: 1.84615;
            padding: 3rem 2rem;
          `}
        >
          <p
            className={css`
              color: #ed293e;
            `}
          >
            現在表示できるコンテンツがありません。
          </p>
        </div>
      ),
    },
  ]

  // パンくずコンポーネント用Propsを作成
  const breadcrumbData: BreadcrumbType[] = [
    {
      href: '/',
      text: 'MOMOTOWN',
    },
    {
      href: '',
      text: 'アイテム詳細',
    },
  ]

  return (
    <HasBreadcrumbLayout
      breadcrumbData={breadcrumbData}
      parentTag="article"
      bgColor="#f8f8f8"
    >
      <Container>
        <div
          className={css`
            @media (min-width: 577px) {
              display: flex;
              justify-content: space-between;
            }
          `}
        >
          <div
            className={css`
              flex: 1;
              max-width: 50rem;

              @media (max-width: 576px) {
                max-width: inherit;
                margin: 0 -2rem;
              }
            `}
          >
            <ProductSlider images={images} />
          </div>

          <div
            className={css`
              width: 40rem;
              margin-left: 4rem;

              @media (max-width: 1020px) {
                width: calc(400 / 1020 * 100vw);
                margin-left: calc(40 / 1020 * 100vw);
              }

              @media (max-width: 576px) {
                width: initial;
                margin-left: 0;
              }
            `}
          >
            <div
              className={css`
                @media (max-width: 576px) {
                  padding: 2.5rem 0;
                }
              `}
            >
              <ProductInfo product={product} />
            </div>

            <div
              className={css`
                margin: 3rem 0 0;

                @media (max-width: 576px) {
                  margin: 0 0 3rem;
                }
              `}
            >
              <ProductCta product={product} />
            </div>

            <div
              className={css`
                margin: 3rem 0 0;

                @media (max-width: 576px) {
                  margin: 0 -2rem;
                }
              `}
            >
              <TabsContents datas={tabsData} />
            </div>

            <div
              className={css`
                margin: 3rem 0 0;

                @media (max-width: 576px) {
                  margin: 5rem 0 6.3rem;
                }
              `}
            >
              <SnsShareButtons />

              {/* <div
                className={css`
                  @media (min-width: 577px) {
                    display: none;
                  }
                `}
              >
                <ProductSnsShare
                  shareTitle={product.name}
                  shareUrl={currentUrl}
                />
              </div> */}
            </div>
          </div>
        </div>
      </Container>
    </HasBreadcrumbLayout>
  )
}
