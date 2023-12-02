import { Box, css } from '@kuma-ui/core'
import { headers } from 'next/headers'

import Breadcrumb from '@/components/breadcrumb'
import Container from '@/components/layouts/container'
import ScrollXContainer from '@/components/layouts/scroll-x-container'
import ProductCta from '@/components/products/product-cta'
import ProductInfo from '@/components/products/product-info'
import ProductSlider from '@/components/products/product-slider'
import ProductSnsShare from '@/components/sns-share'
// import Tabs from '@/components/tabs';
import TabsContents from '@/components/tab-contents'
import { fetchProduct } from '@/utils/product'

import type { ProductContentsType, ImageType } from '@/types/product'

type PageProps = {
  params: {
    productId: string
  }
}

export default async function Page({ params }: PageProps) {
  const currentUrl = headers().get('referer')

  const product: ProductContentsType[] = await fetchProduct(
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
    <>
      <article
        className={css`
          background-color: #f8f8f8;
          display: flex;
          flex-direction: column;
        `}
      >
        <div
          className={css`
            padding: 2.5rem 0 4rem;

            @media (max-width: 979px) {
              order: 2;
              padding: 1rem 0;
            }
          `}
        >
          <ScrollXContainer>
            <Breadcrumb data={breadcrumbData} />
          </ScrollXContainer>
        </div>

        <div
          className={css`
            order: 1;
          `}
        >
          <div
            className={css`
              background-color: #fff;
            `}
          >
            <ProductSlider images={images} />

            <Container>
              <div
                className={css`
                  padding: 2.5rem 0 3rem;
                `}
              >
                <ProductInfo product={product} />

                <Box mt="2.5rem">
                  <ProductCta />
                </Box>
              </div>
            </Container>
          </div>

          <TabsContents datas={tabsData} />

          <Container>
            <div
              className={css`
                padding: 5rem 0 6.3rem;
              `}
            >
              <ProductSnsShare
                shareTitle={product.name}
                shareUrl={currentUrl}
              />
            </div>
          </Container>
        </div>
      </article>
    </>
  )
}
