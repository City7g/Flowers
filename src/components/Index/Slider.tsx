'use client'

import Image from 'next/image'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import googleIcon from '@/assets/icons/google-logo.svg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '../../styles/base/_slider.scss'

export const slides = [
  {
    text: '“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”',
    auther: 'Ronald Richards',
  },
  {
    text: '“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptates deserunt dolore, corrupti, atque officiis odit repellendus commodi, debitis nisi odio inventore nemo saepe! Sequi deserunt eos architecto assumenda dignissimos.”',
    auther: 'Jason Statham',
  },
  {
    text: '“Красиво делай - красиво будет”',
    auther: 'Lonely Wols',
  },
  {
    text: '“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptates deserunt dolore, corrupti, atque officiis odit repellendus commodi, debitis nisi odio inventore nemo saepe! Sequi deserunt eos architecto assumenda dignissimos.”',
    auther: 'Arnold Rise',
  },
]

export default function IndexSlider() {
  return (
    <div className="slider-section">
      <a href="https://www.google.com/" target="black">
        <Image src={googleIcon} alt="google" className="lider-section__logo" />
      </a>
      <p className="text-overline slider-section__subtitle">Reviews</p>
      <h2 className="title-h2 slider-section__title">Our Clients say</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <p className="slide__text">{slide.text}</p>
            <h6 className="title-h6 slide__auther">-{slide.auther}</h6>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="btn-secondary slider-section__btn">
        Read reviews
      </button>
    </div>
  )
}
