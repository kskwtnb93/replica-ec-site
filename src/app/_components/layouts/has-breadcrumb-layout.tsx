import { Box, css } from '@kuma-ui/core'
import Breadcrumb from '@/app/_components/breadcrumb'
import ScrollXContainer from '@/app/_components/layouts/scroll-x-container'

import type { BreadcrumbType } from '@/types'

type Props = {
  children: React.ReactNode
  breadcrumbData: BreadcrumbType[]
  parentTag?: React.ElementType | undefined
  bgColor?: string | undefined
}

export default async function HasBreadcrumbLayout({
  children,
  breadcrumbData,
  parentTag,
  bgColor,
}: Props) {
  return (
    <Box
      as={parentTag ? parentTag : 'div'}
      bgColor={bgColor ? bgColor : 'transparent'}
      className={css`
        @media (min-width: 577px) {
          background-color: transparent !important;
        }

        @media (max-width: 576px) {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}
    >
      <div
        className={css`
          @media (max-width: 576px) {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        `}
      >
        <div
          className={css`
            padding: 2.5rem 0 4rem;

            @media (max-width: 576px) {
              order: 2;
              padding: 3.8rem 0 1rem;
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

            @media (max-width: 576px) {
              flex: 1;
              background-color: #fff;
            }
          `}
        >
          {children}
        </div>
      </div>
    </Box>
  )
}
