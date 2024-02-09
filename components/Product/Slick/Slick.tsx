'use client'
import Slider from 'react-slick'
import { useState } from 'react'

import Image from 'next/image'
import banner1 from '@/public/banner1.png'
import banner2 from '@/public/banner2.png'
import banner3 from '@/public/banner3.png'

// React-Slick 를 통해 메인 페이지의 배너 슬라이드를 사용하는 컴포넌트 입니다.

export default function Banner() {
  const [loading, setLoading] = useState(true)
  const totalImages = 3 // 로드할 이미지 총 수량 할당
  let loadedImages = 0 // 로드 된 이미지 수량 추적

  const handleImageLoaded = () => {
    // 이미지 로드시 이 함수 호출
    loadedImages++
    if (loadedImages >= totalImages) {
      setLoading(false)
    }
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  }

  return (
    <>
      <Slider {...settings}>
        <Image
          src={banner1}
          width={1300}
          height={10}
          className='m-auto'
          alt='Banner-Temp'
          priority
          onLoad={handleImageLoaded}
        />

        <Image
          src={banner2}
          width={1300}
          height={10}
          className='m-auto'
          alt='Banner-Temp'
          priority
          onLoad={handleImageLoaded}
        />

        <Image
          src={banner3}
          width={1300}
          height={10}
          className='m-auto'
          alt='Banner-Temp'
          priority
          onLoad={handleImageLoaded}
        />
      </Slider>
    </>
  )
}
