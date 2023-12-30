'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useRef, useState } from 'react'
import { css } from '@kuma-ui/core'
import Image from 'next/image'
// @ts-expect-error Swiper v10以上で　TS5の互換性に対応しているらしいですが、どうしても　Swiper v8　が使いたいため
import { A11y } from 'swiper'
// @ts-expect-error Swiper v10以上で　TS5の互換性に対応しているらしいですが、どうしても　Swiper v8　が使いたいため
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import NavigationButton from '@/app/_components/buttons/slider-navigation-button'
import SkeletonScreen from '@/app/_components/skeleton-screen'

import type { ImageType } from '@/types/product'

type SwiperType = {
  slidePrev: () => void
  slideNext: () => void
}

interface Props {
  images: ImageType[]
}

export default function ProductSlider({ images }: Props) {
  const swiperRef = useRef<SwiperClass | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
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
    <div
      className={css`
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
        modules={[A11y]}
        slidesPerView={'auto'}
        centeredSlides={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex)
        }}
        className={css`
          position: relative;
          opacity: 0;
          transition: opacity 0.15s linear;

          &.swiper-initialized {
            opacity: 1;
          }
        `}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className={css`
              position: relative;
              width: 100%;
              aspect-ratio: 375 / 450;
              overflow: hidden;
            `}
          >
            <Image
              className={css`
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: cover;
                z-index: 1;
              `}
              src={image.url}
              width={imageWidth}
              height={calcImageHeight(image.height, image.width, imageWidth)}
              alt={''}
              priority={true}
            />

            <SkeletonScreen />
          </SwiperSlide>
        ))}

        {activeIndex !== 0 && (
          <div
            className={css`
              position: absolute;
              top: 50%;
              left: 1rem;
              z-index: 2;
              margin-top: -2rem;
            `}
          >
            <NavigationButton onClick={handleSlidePrev} kind="prev" />
          </div>
        )}

        {activeIndex !== images.length - 1 && (
          <div
            className={css`
              position: absolute;
              top: 50%;
              right: 1rem;
              z-index: 2;
              margin-top: -2rem;
            `}
          >
            <NavigationButton onClick={handleSlideNext} kind="next" />
          </div>
        )}
      </Swiper>
    </div>
  )
}
