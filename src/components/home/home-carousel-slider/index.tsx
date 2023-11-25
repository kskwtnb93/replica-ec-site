'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useRef } from 'react'
import { css } from '@kuma-ui/core'
import Image from 'next/image'
import Link from 'next/link'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import NavigationButton from '@/components/home/home-carousel-slider/navigation-button'

import type { CampaignType } from '@/types'

type SwiperType = {
  slidePrev: () => void
  slideNext: () => void
}

interface Props {
  campaigns: CampaignType[]
}

export default function HomeCarouselSlider({ campaigns }: Props) {
  const swiperRef = useRef<SwiperClass | null>(null)
  const imageWidth = 450 * 2

  // 画像幅を556pxにしたときのアスペクト比を維持した画像の高さを求める
  function calcImageHeight(
    orgImageHeight: number,
    orgImageWidth: number,
    imageWidth: number
  ): number {
    return (orgImageHeight / orgImageWidth) * imageWidth
  }

  function handleSlidePrev() {
    ;(swiperRef.current as SwiperType)?.slidePrev()
  }

  function handleSlideNext() {
    ;(swiperRef.current as SwiperType)?.slideNext()
  }

  return (
    <section
      className={css`
        padding: 0 0 3rem;

        .swiper-pagination-bullet-active {
          background-color: #2d2d2d;
        }

        .swiper-pagination-fraction,
        .swiper-pagination-custom,
        .swiper-horizontal > .swiper-pagination-bullets,
        .swiper-pagination-bullets.swiper-pagination-horizontal {
          bottom: 0.2rem;
        }
      `}
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        initialSlide={0}
        slidesPerView={'auto'}
        centeredSlides={true}
        loop={true}
        speed={300}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        className={css`
          position: relative;
          padding: 4rem 0;
          opacity: 0;
          transition: opacity 0.15s linear;
          overflow: visible;

          &.swiper-initialized {
            opacity: 1;
          }
        `}
      >
        {campaigns.map((campaign) => (
          <SwiperSlide
            key={campaign.id}
            className={css`
              max-width: 48rem;
              padding: 0 1.5rem;
            `}
          >
            <Link href={campaign.linkUrl}>
              <div
                className={css`
                  position: relative;
                  overflow: hidden;
                  border-radius: 1rem;
                  position: relative;
                  height: 29.55rem;
                  box-shadow: 0.4rem 0.6rem 1.6rem rgba(0, 0, 0, 15%);
                  background-color: rgba(45, 45, 45, 7%);
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 2.5rem;
                  `}
                >
                  <h2
                    className={css`
                      font-weight: bold;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      word-break: break-word;
                      word-wrap: normal;
                      white-space: nowrap;
                      font-size: 2.3rem;
                      color: #fff;
                    `}
                  >
                    {campaign.title}
                  </h2>
                  <p
                    className={css`
                      overflow: hidden;
                      text-overflow: ellipsis;
                      word-break: break-word;
                      word-wrap: normal;
                      white-space: nowrap;
                      font-size: 1.5rem;
                      font-weight: normal;
                      color: #fff;
                    `}
                  >
                    {campaign.description}
                  </p>
                </div>

                <Image
                  className={css`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  `}
                  src={campaign.image.url}
                  width={imageWidth}
                  height={calcImageHeight(
                    campaign.image.height,
                    campaign.image.width,
                    imageWidth
                  )}
                  alt={campaign.title}
                  priority={true}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        <div
          className={css`
            position: absolute;
            top: 50%;
            left: 2rem;
            z-index: 2;
            margin-top: -2rem;
          `}
        >
          <NavigationButton onClick={handleSlidePrev} kind="prev" />
        </div>

        <div
          className={css`
            position: absolute;
            top: 50%;
            right: 2rem;
            z-index: 2;
            margin-top: -2rem;
          `}
        >
          <NavigationButton onClick={handleSlideNext} kind="next" />
        </div>
      </Swiper>
    </section>
  )
}
